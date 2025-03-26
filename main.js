let quotes = [];

        async function loadQuotes() {
            try {
                const response = await fetch("quotes.json");
                quotes = await response.json();
            } catch (error) {
                console.error("خطأ في تحميل الاقتباسات", error);
            }
        }

        function generateQuote() {
            if (quotes.length === 0) {
                document.getElementById("quote").textContent = "❌ لم يتم تحميل الاقتباسات!";
                return;
            }
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const selectedQuote = quotes[randomIndex];
            document.getElementById("quote").textContent = `"${selectedQuote.quote}"`;
            document.getElementById("author").textContent = `— ${selectedQuote.author}`;
        }

        loadQuotes();

        function showCountrySelector() {
            document.getElementById('mainContainer').style.display = 'none';
            document.getElementById('prayerTimesContainer').style.display = 'block';
            
            document.getElementById('countrySelect').addEventListener('change', function() {
                const countryCode = this.value;
                if (countryCode) {
                    showPrayerTimes(countryCode);
                }
            });
        }
        
        function showPrayerTimes(countryCode) {
            const iframeContainer = document.getElementById('prayerTimesIframeContainer');
            iframeContainer.innerHTML = `
                <iframe height="477" width="100%" style="background:#f8f8f8;border: 1px solid #eee;" 
                src="https://prayertimes3.today/embed/?city=${countryCode}&azan=true&time=true&intro=true&next-prayer=true&remove-link=true&width=100%&lang=ar&color=007BFF"></iframe>
            `;
        }
        
        function backToMain() {
            document.getElementById('prayerTimesContainer').style.display = 'none';
            document.getElementById('mainContainer').style.display = 'grid';
            document.getElementById('prayerTimesIframeContainer').innerHTML = '';
            document.getElementById('countrySelect').value = '';
        }

        function openQuran() {
            alert('سيتم فتح المصحف هنا');
        }

        function openQuiz() {
            alert('سيتم فتح الاختبارات الدينية هنا');
        }









        