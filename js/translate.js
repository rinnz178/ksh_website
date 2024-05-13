let currentLanguage = 'en'; // Default language is English

        function changeLanguage() {
            const selectElement = document.getElementById('languageSelect');
            currentLanguage = selectElement.value;

            const translations = {
                'en': {
                    'title': 'Welcome',
                    'content': 'This is a sample text that needs to be translated dynamically.',
                    'top_title': 'Your Japanese Language Journey Matters to Us',
                },
                'jp': {
                    'title': 'ようこそ',
                    'content': 'これは動的に翻訳されるサンプルテキストです。',
                    'top_title': 'あなたの日本語の旅は私たちにとって重要です',
                }
                // Add more translations as needed
            };

            const titleElement = document.getElementById('title');
            const contentElement = document.getElementById('content');
            const topTitleElement = document.getElementById('top_title');

            if (translations[currentLanguage]) {
                titleElement.textContent = translations[currentLanguage]['title'];
                contentElement.textContent = translations[currentLanguage]['content'];
                topTitleElement.textContent = translations[currentLanguage]['top_title'];
            
            }
        }