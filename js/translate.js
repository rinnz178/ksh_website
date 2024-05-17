let currentLanguage = 'en'; // Default language is English

        function changeLanguage() {
            const selectElement = document.getElementById('languageSelect');
            currentLanguage = selectElement.value;

            const translations = {
                'en': {
                    'home': 'Home',
                    'nav_course': 'Services',
                    'nav_service': 'Courses',
                    'nav_blog': 'Blog',
                    'nav_about': 'About',
                    'nav_contact': 'Contact',
                    'top_title': 'Your Japanese Language Journey Matters to Us',
                    'center_title': 'Boost Your Japanese Language Skills and Job Opportunities.',
                    'banner_contact_btn': 'Contact Us',
                    'about_us': 'About Us',
                    'chairman': 'Chairman',
                    'about_us_description': ' Established on December 14, 2011, under the leadership of Representative Director Daw Khin Su Hlaing, the company boasts a robust profile in various sectors. Registered under the Company registration number 119314933 with DICA and holding an Overseas Staffing Agency License registration number 85/2013, the company has grown to accommodate 15 dedicated employees. Their diverse business portfolio includes overseas staffing services, Japanese-language education, tour services, nursing care vocational training, trainee training, apprentice training, and technical intern training. With a commitment to excellence and a focus on nurturing talent, the company plays a pivotal role in facilitating employment opportunities abroad while also fostering skill development through comprehensive training programs.',
                    'get_in_touch': 'Get In Touch',
                    'goal_description': 'Enabling students to master Japanese language proficiency.',
                    'our_goals': 'Our Goals',
                    'goal_item1': 'Khin Su Hlaing Service Co., Ltd. helps young people in Myanmar to get active and find employment in their professional field.',
                    'goal_item2': 'The number of young people dispatched as trainees and technical interns through our company`s dispatch service is also increasing every year.',
                    'goal_item3': 'Our company is actively involved in development activities in our home country of Myanmar, with the aim of promoting understanding and friendship.',
                    'goal_item4': 'We have trained technical intern trainees and will continue to work hard to develop technical intern trainees.',
                    'our_services': 'Our Services',
                    'language_school': 'Language School',
                    'school_service_detail': 'Learn Japanese language and culture with us! Our expert instructors provide effective learning in a supportive environment. Please join us and start your Japanese journey today!',
                    'job_training': 'Job Training',
                    'job_service_detail': 'Join our job training program for practical skills and career success! Led by experts, our tailored courses prepare you for the workplace. Start your journey with us today!',
                    'interview_preparation': 'Interview Preparation',
                    'interview_service_detail': 'Welcome to our interview preparation service! We`ll help you shine with mock interviews and expert tips. Get ready to nail that job interview!',
                    'agency': 'Agency',
                    'agency_service_detail': 'Welcome to our agency! We offer tailored solutions and expert support to help you succeed. Let`s work together to achieve your goals!',
                    'our_courses': 'Our Courses',
                    'garment_industry': 'Garment Industry',
                    'garment_industry_detail': 'Our garment industry teaching training school is the perfect place to kickstart your career in fashion. Led by industry experts, our comprehensive program covers every aspect of garment production, from design to manufacturing. You`ll learn essential skills like pattern-making, sewing techniques, and quality control in our hands-on workshops. Our experienced instructors will guide you through the latest trends and technologies in the fashion industry, preparing you for a successful career. With our emphasis on creativity and innovation, you`ll graduate ready to make your mark in the exciting world of fashion design and production.',
                    'food_service': 'Food Service',
                    'food_service_detail': 'Our food service teaching training school is a premier institution dedicated to honing culinary talent and excellence in the hospitality sector. Led by experienced chefs, we cover everything from basic cooking skills to advanced techniques and kitchen management. Through hands-on experience and internships, we prepare you for roles like chef, manager, or entrepreneur. With us, you`ll gain the skills and confidence to succeed in the exciting field of food service.',
                    'transportation_company': 'Transportation Company',
                    'transportation_company_detail': 'Our transportation company training school is where individuals learn the ropes of the transportation industry. Led by experienced instructors, we cover everything from driving techniques to customer service. With hands-on training and a focus on safety and professionalism, students are prepared for roles like bus drivers, truck drivers, or logistics coordinators. We equip them with the skills and confidence needed to excel in the transportation sector.',
                    'dyeing_industry': 'dyeing_industry',
                    'dyeing_industry_detail': 'Our dyeing industry training school is your gateway to mastering the art and science of dyeing. Led by seasoned professionals, our program covers everything from color theory to practical techniques. Through hands-on training in our state-of-the-art facility, you`ll learn to create vibrant colors and achieve desired results on different fabrics. With a focus on sustainability, we teach eco-friendly practices to minimize environmental impact. Whether you`re interested in textile manufacturing or fashion design, our school prepares you for a successful career in the dyeing industry.',
                    'manufacturing_company': 'Bread Manufacturing Company',
                    'manufacturing_company_detail': 'Our bread manufacturing company doubles as a training school for aspiring bakers. Led by experienced professionals, our program covers the entire bread-making process, from dough mixing to baking and packaging. With hands-on experience and a focus on quality and consistency, students graduate equipped for careers in bread manufacturing or artisanal baking.',
                    'livestock_indudtry': 'Agriculture and Livestock Indudtry',
                    'livestock_indudtry_detail': 'Our agriculture and Livestock Industry training school provides comprehensive education in farming and animal husbandry. Led by experienced professionals, our program covers crop cultivation, animal care, and farm management. With a focus on sustainability and innovation, students learn modern farming practices and agricultural technologies. Additionally, they gain business skills for entrepreneurial endeavors in the agriculture industry. Graduates are well-prepared for diverse careers in farming, agribusiness, and livestock management.',
                    'nursing_care': 'Nursing Care',
                    'nursing_care_detail': 'Our nursing care training school offers a practical and compassionate education for aspiring caregivers. Led by experienced healthcare professionals, our program covers essential skills like patient care, medical procedures, and healthcare technology. With hands-on training and a focus on empathy, communication, and cultural sensitivity, graduates are prepared to excel as licensed practical nurses (LPNs) or registered nurses (RNs) in various healthcare settings.',
                    'construction_industry': 'Construction Industry',
                    'construction_industry_detail': 'Our training school specializes in the construction industry, offering practical and theoretical education. Experienced professionals teach the latest techniques and safety management. We provide courses for all skill levels, supporting your career growth. Join us to succeed in the construction industry.',

                    'our_activities': 'Our Activites',
                    'activities_detail': 'Our activities are centered on improving students`language skills. We provide free job introductions and interviews for 6 months.',
                    'activities1': '350 people in garment industry',
                    'activities2': '30 people in food companies',
                    'activities3': '40 people in construction industry',
                    'activities4': '10 people in transportation company',
                    'activities5': '10 people in the dyeing industry',
                    'activities6': '7 people in bread manufacturing company',
                    'activities7': 'Agriculture and livestock industry 15 people',
                    'activities8': 'Nursing care 200 people',
                    'our_features': 'Our Features',
                    'features_item1': 'We manage internships at Kinsu Line Service Co., Ltd. Get free job introductions and interviews for 6 months.',
                    'features_item2': 'Selected apprentices get free pre-training and advanced training until departure, all at no cost',
                    'features_item3': 'Trainees selected for interview receive practical training at a center like a Japanese workplace',
                    'features_item4': 'Monitoring after dispatch',
                    'road_map_title': 'Employment introduction and interview procedures',
                    'road_map_detail1': 'Registered as an apprentice at Kinsu Line Service Limited Liability Co., Ltd.',
                    'road_map_detail2': 'Daily job introduction and interview reports from Kinsu Line Service Co., Ltd.',
                    'road_map_detail3': 'Job introduction and interview',
                    'road_map_detail4': 'Apprentices who are selected through employment introduction and interviews will enter into a corporate outsourcing contract with Kinsline Service Co., Ltd. regarding the overseas temporary staffing business.',
                    'road_map_detail5': 'Apprentices selected through job introduction and interviews will participate in a 6- month vocational training course at KSH Japanese Language School.',
                    'road_map_detail6': 'Departing from Japan and finding employment in Japan',
                    'contactSection': 'Get In Touch',
                    'contact_name': 'Name',
                    'contact_email': 'Email',
                    'contact_message': 'Message',
                    'submit_form': 'Message',
                    'call_us': 'Call Us',
                    'location': 'Location',
                    'opening_hour': 'Opening hour',
                    'opening_day': 'Monday-Friday: 9am-5pm',
                    'closing_day': 'Saturday-Sunday: Closed',
                    
                    




                },
                'jp': {
                    'home': 'ホーム',
                    'nav_service': 'サービス',
                    'nav_course': 'コース',
                    'nav_blog': 'ブログ',
                    'nav_about': 'アバウト',
                    'nav_contact': 'お問い合わせ',
                    'top_title': 'あなたの日本語の旅は私たちにとって重要です',
                    'center_title': '日本語スキルを高めて仕事のチャンスを広げましょう。',
                    'banner_contact_btn': 'お問い合わせ',
                    'about_us': '会社概要',
                    'chairman': '代表取締役',
                    'about_us_description': '2011年12月14日に、代表取締役ドーキンスラィンのリーダーシップのもとに設立された当社は、様々なセクターで強固なプロフィールを築いて参りました。会社登録番号119314933でDICAに登録され、海外人材派遣代理店免許登録番号85/2013を取得しております。現在、15名の献身的な従業員が当社に在籍しております。当社の多様な事業ポートフォリオには、海外人材派遣サービス、日本語教育、ツアーサービス、看護職業訓練、研修生トレーニング、見習いトレーニング、技能実習生トレーニングなどが含まれております。卓越性へのお約束と人材育成への専念をもって、包括的なトレーニングプログラムを通じてスキルの向上を図り、海外での雇用機会を促進することに努めて参ります。',
                    'get_in_touch': 'お問い合わせ',
                    'goal_description': '学生が日本語能力を習得できるようにする。',
                    'our_goals': '弊社の目標',
                    'goal_item1': 'Khin Su Hlaing Service Co., Ltd. は、ミャンマーの若者が積極的に行動し、自分の専門分野で就職できるよう支援しています。',
                    'goal_item2': '当社の派遣サービスを通じて研修生・技能実習生として派遣される若者の数も年々増加しています。',
                    'goal_item3': '弊社は、理解と友好の促進を目的に、母国ミャンマーでの開発活動に積極的に取り組んでおります。',
                    'goal_item4': '弊社は技能実習生を育成しており、今後も技能実習生の育成に努めてまいります。',
                    'our_services': '弊社のサービス',
                    'language_school': '語学学校',
                    'school_service_detail': '弊社で日本語と日本文化を学びましょう！専門の講師が、支援的な環境で効果的な学習を提供します。ぜひご参加いただき、日本語の旅を今日から始めましょう！',
                    'job_training': '職業訓練',
                    'job_service_detail': '弊社の職業訓練プログラムに参加して、実践的なスキルとキャリア成功を手に入れましょう！専門家が指導するカスタマイズされたコースで、職場への準備を整えます。今日から弊社と共に新たな旅を始めましょう！',
                    'interview_preparation': '面接準備',
                    'interview_service_detail': '弊社の面接準備サービスへようこそ！模擬面接と専門家のアドバイスで、あなたの魅力を引き出します。自信を持って面接に臨みましょう！',
                    'agency': '代理店',
                    'agency_service_detail': '弊社の代理店へようこそ！ 弊社は、お客様の成功を支援するために、カスタマイズされたソリューションと専門家によるサポートを提供します。 目標達成に向けて一緒に頑張りましょう！',
                    'our_courses': '弊社のコース',
                    'garment_industry': '縫製企業',
                    'garment_industry_detail': '弊社の縫製産業は、ファッション業界でキャリアをスタートさせるのに最適な場所です。業界の専門家によって指導される包括的なプログラムでは、デザインから製造までの衣料品生産のすべてをカバーします。実践的なワークショップで、パターンメイキングや縫製技術、品質管理などの重要なスキルを身につけます。経験豊富なインストラクターが、ファッション業界の最新トレンドやテクノロジーを指導し、成功への準備を支援します。創造性とイノベーションを重視したカリキュラムで、ファッションデザインと生産のエキサイティングな世界で活躍できるようになります。',
                    'food_service': '飲食サービス',
                    'food_service_detail': '弊社の食品サービス教育訓練校は、料理の才能を磨き、ホスピタリティ業界での卓越した実績を目指すために設立されたトップの機関です。経験豊富なシェフによって指導され、基本的な調理スキルから高度な技術、厨房管理までを網羅しています。実地経験やインターンシップを通じて、シェフ、マネージャー、または起業家などの役割に備えます。私たちと共に、食品サービスのエキサイティングな分野で成功するためのスキルと自信を身につけることができます。',
                    'transportation_company': '運送会社',
                    'transportation_company_detail': '当社の運送会社養成学校は、運送業の仕事を学ぶ場です。経験豊富なインストラクターが指導し、運転技術から顧客サービスまですべてをカバーします。安全性とプロフェッショナリズムに重点を置いた実践的なトレーニングにより、学生はバス運転手、トラック運転手、物流コーディネーターなどの役割に備えることができます。私たちは、輸送部門で優れた能力を発揮するために必要なスキルと自信を彼らに与えます。',
                    'dyeing_industry': '染色産業',
                    'dyeing_industry_detail': '弊社の染色産業養成学校は、染色の芸術と科学を習得するための入り口です。経験豊富なプロフェッショナルによって指導され、カラーセオリーから実践的な技術までをカバーしています。最新設備を備えた施設での実地トレーニングを通じて、さまざまな生地に鮮やかな色を生み出し、目的の結果を得る方法を学びます。持続可能性を重視し、環境への影響を最小限に抑えるエコフレンドリーな実践方法を教えています。繊維製造またはファッションデザインに興味があるかどうかにかかわらず、私たちの学校は染色産業での成功を目指すあなたを準備します。',
                    'manufacturing_company': 'パン製造会社',
                    'manufacturing_company_detail': '弊社のパン製造会社は、意欲的なベーカーを対象とした養成学校としても機能しています。経験豊富なプロフェッショナルによって指導されるプログラムでは、生地の混合から焼成、梱包まで、パン製造の全プロセスを網羅しています。実地経験を積み重ね、品質と一貫性に焦点を当てながら、学生はパン製造や職人的なベーキングのキャリアに備えて卒業します。',
                    'livestock_indudtry': '農畜産業',
                    'livestock_indudtry_detail': '弊社の農業と畜産業養成学校は、農業と畜産に関する包括的な教育を提供しています。経験豊富なプロフェッショナルによって指導されるプログラムでは、作物栽培、動物の世話、農場経営などをカバーしています。持続可能性と革新を重視し、学生は現代の農業技術や農業技術を学びます。さらに、彼らは農業業界での起業活動に必要なビジネススキルも身につけます。卒業生は、農業、農業ビジネス、畜産管理など、多様なキャリアに向けて十分に準備されています。',
                    'nursing_care': '介護',
                    'nursing_care_detail': '弊社の介護養成学校は、介護士を目指す方々に実践的かつ思いやりのある教育を提供しています。経験豊富な医療専門家によって指導されるプログラムでは、患者ケア、医療手順、医療技術などの必須スキルをカバーしています。実地トレーニングと共感力、コミュニケーション能力、文化的感受性に焦点を当てた教育を通じて、卒業生は様々な医療施設で許可された実用看護師（LPN）または登録看護師（RN）として優れた成果を上げる準備ができています。',
                    'construction_industry': '建設業',
                    'construction_industry_detail': '弊社の訓練学校は建設業界に特化し、実践的かつ理論的な教育を提供しています。経験豊富なプロが最新の技術と安全管理を教えます。すべてのレベルに対応したコースを提供し、キャリア成長を支援します。建設業界で成功するために、ぜひご利用ください。',

                    'our_activities': '弊社の活動',
                    'activities_detail': '弊社の活動は、学生の言語スキル向上を中心に行っています。また、6ヶ月間無料での就職紹介や面接も行っています。',
                    'activities1': '縫製企業に350 名',
                    'activities2': '食品企業に30名',
                    'activities3': '建設業に40名',
                    'activities4': '運送企業に10名',
                    'activities5': '染色工業に10名',
                    'activities6': 'パンの製造企業に7名',
                    'activities7': '農業及び畜産業15名',
                    'activities8': '介護200名',
                    'our_features': '弊社の特徴',
                    'features_item1': 'Kinsu Line Service Co., Ltd.でインターンシップを運営しています。6か月間無料で仕事の紹介と面接を受けることができます。',
                    'features_item2': '選ばれた研修生は、出発まで無料で事前トレーニングと高度なトレーニングを受けることができます。',
                    'features_item3': '面接で選ばれた研修生は、日本の職場と同様のセンターで実習を受けます。',
                    'features_item4': '派遣後のモニタリング',
                    'road_map_title': '職業紹介及び面接の手続き',
                    'road_map_detail1': 'キン ス ラィンサービス有限責任株式会社にて実習生登録',
                    'road_map_detail2': 'キン ス ラィンサービス有限責任株式会社より職業紹介及び面接の日々の報告',
                    'road_map_detail3': '職業紹介及び面接に受ける',
                    'road_map_detail4': '職業紹介及び面接に採用された実習生はキンスラインサービス有限責任株式会社 と海外人材派遣事業に関する企業委託契約書を締結する。',
                    'road_map_detail5': '職業紹介及び面接に採用された実習生はK.S.H日本語学校の 職業訓練6ヶ月トレーニングコース参加する。',
                    'road_map_detail6': '出国及び日本での就職先に入職',
                    'contactSection': 'お問い合わせ',
                    'contact_name': '名前',
                    'contact_email': 'メール',
                    'contact_message': 'メッセージ',
                    'submit_form': 'フォームを提出する',
                    'call_us': 'お電話ください',
                    'location': '所在地',
                    'opening_hour': '営業時間',
                    'opening_day': '月曜日〜金曜日：午前9時〜午後5時',
                    'closing_day': '土曜～日曜：休業',










                }
                // Add more translations as needed
            };
            const homeElement = document.getElementById('home');
            const navServiceElement = document.getElementById('nav_service');
            const navCourseElement = document.getElementById('nav_course');
            const navBlogElement = document.getElementById('nav_blog');
            const navAboutElement = document.getElementById('nav_about');
            const navContactElement = document.getElementById('nav_contact');
            const topTitleElement = document.getElementById('top_title');
            const centerTitleElement = document.getElementById('center_title');
            const bannerContactBtnElement = document.getElementById('banner_contact_btn');
            const aboutUsElement = document.getElementById('about_us');
            const chairmanElement = document.getElementById('chairman');
            const aboutUsDescriptionElement = document.getElementById('about_us_description');
            const getInTouchElement = document.getElementById('get_in_touch');
            const goalDescriptionElement = document.getElementById('goal_description');
            const ourGoalsElement = document.getElementById('our_goals');
            const goalItem1Element = document.getElementById('goal_item1');
            const goalItem2Element = document.getElementById('goal_item2');
            const goalItem3Element = document.getElementById('goal_item3');
            const goalItem4Element = document.getElementById('goal_item4');
            const ourServicesElement = document.getElementById('our_services');
            const languageSchoolElement = document.getElementById('language_school');
            const schoolServiceDetailElement = document.getElementById('school_service_detail');
            const jobTrainingElement = document.getElementById('job_training');
            const jobServiceDetailElement = document.getElementById('job_service_detail');
            const interviewPreparationElement = document.getElementById('interview_preparation');
            const interviewServiceDetailElement = document.getElementById('interview_service_detail');
            const agencyElement = document.getElementById('agency');
            const agencyServiceDetailElement = document.getElementById('agency_service_detail');
            const ourCoursesElement = document.getElementById('our_courses');
            const garmentIndustryElement = document.getElementById('garment_industry');
            const garmentIndustryDetailElement = document.getElementById('garment_industry_detail');
            const foodServiceElement = document.getElementById('food_service');
            const foodServiceDetailElement = document.getElementById('food_service_detail');
            const transportationCompanyElement = document.getElementById('transportation_company');
            const transportationCompanyDetailElement = document.getElementById('transportation_company_detail');
            const dyeingIndustryElement = document.getElementById('dyeing_industry');
            const dyeingIndustryDetailElement = document.getElementById('dyeing_industry_detail');
            const manufacturingCompanyElement = document.getElementById('manufacturing_company');
            const manufacturingCompanyDetailElement = document.getElementById('manufacturing_company_detail');
            const livestockIndudtryElement = document.getElementById('livestock_indudtry');
            const livestockIndudtryDetailElement = document.getElementById('livestock_indudtry_detail');
            const nursingCareElement = document.getElementById('nursing_care');
            const nursingCareDetailElement = document.getElementById('nursing_care_detail');
            const constructionIndustryElement = document.getElementById('construction_industry');
            const constructionIndustryDetailElement = document.getElementById('construction_industry_detail');

            const ourActivitiesElement = document.getElementById('our_activities');
            const activitiesDetailElement = document.getElementById('activities_detail');
            const activities1Element = document.getElementById('activities1');
            const activities2Element = document.getElementById('activities2');
            const activities3Element = document.getElementById('activities3');
            const activities4Element = document.getElementById('activities4');
            const activities5Element = document.getElementById('activities5');
            const activities6Element = document.getElementById('activities6');
            const activities7Element = document.getElementById('activities7');
            const activities8Element = document.getElementById('activities8');
            const ourFeaturesElement = document.getElementById('our_features');
            const featuresItem1Element = document.getElementById('features_item1');
            const featuresItem2Element = document.getElementById('features_item2');
            const featuresItem3Element = document.getElementById('features_item3');
            const featuresItem4Element = document.getElementById('features_item4');
            const roadMapTitleElement = document.getElementById('road_map_title');
            const roadMapDetail1Element = document.getElementById('road_map_detail1');
            const roadMapDetail2Element = document.getElementById('road_map_detail2');
            const roadMapDetail3Element = document.getElementById('road_map_detail3');
            const roadMapDetail4Element = document.getElementById('road_map_detail4');
            const roadMapDetail5Element = document.getElementById('road_map_detail5');
            const roadMapDetail6Element = document.getElementById('road_map_detail6');
            const contactSectionElement = document.getElementById('contactSection');
            const contactNameElement = document.getElementById('contact_name');
            const contactEmailElement = document.getElementById('contact_email');
            const contactMessageElement = document.getElementById('contact_message');
            const submitFormElement = document.getElementById('submit_form');
            const callUsElement = document.getElementById('call_us');
            const locationElement = document.getElementById('location');
            const openingHourElement = document.getElementById('opening_hour');
            const openingDayElement = document.getElementById('opening_day');
            const closingDayElement = document.getElementById('closing_day');

            


            


            if (translations[currentLanguage]) {
                
                homeElement.textContent = translations[currentLanguage]['home'];
                navServiceElement.textContent = translations[currentLanguage]['nav_service'];
                navCourseElement.textContent = translations[currentLanguage]['nav_course'];
                navBlogElement.textContent = translations[currentLanguage]['nav_blog'];
                navAboutElement.textContent = translations[currentLanguage]['nav_about'];
                navContactElement.textContent = translations[currentLanguage]['nav_contact'];
                topTitleElement.textContent = translations[currentLanguage]['top_title'];
                centerTitleElement.textContent = translations[currentLanguage]['center_title'];
                bannerContactBtnElement.textContent = translations[currentLanguage]['banner_contact_btn'];
                aboutUsElement.textContent = translations[currentLanguage]['about_us'];
                chairmanElement.textContent = translations[currentLanguage]['chairman'];
                aboutUsDescriptionElement.textContent = translations[currentLanguage]['about_us_description'];
                getInTouchElement.textContent = translations[currentLanguage]['get_in_touch'];
                goalDescriptionElement.textContent = translations[currentLanguage]['goal_description'];
                ourGoalsElement.textContent = translations[currentLanguage]['our_goals'];
                goalItem1Element.textContent = translations[currentLanguage]['goal_item1'];
                goalItem2Element.textContent = translations[currentLanguage]['goal_item2'];
                goalItem3Element.textContent = translations[currentLanguage]['goal_item3'];
                goalItem4Element.textContent = translations[currentLanguage]['goal_item4'];
                ourServicesElement.textContent = translations[currentLanguage]['our_services'];
                languageSchoolElement.textContent = translations[currentLanguage]['language_school'];
                schoolServiceDetailElement.textContent = translations[currentLanguage]['school_service_detail'];
                jobTrainingElement.textContent = translations[currentLanguage]['job_training'];
                jobServiceDetailElement.textContent = translations[currentLanguage]['job_service_detail'];
                interviewPreparationElement.textContent = translations[currentLanguage]['interview_preparation'];
                interviewServiceDetailElement.textContent = translations[currentLanguage]['interview_service_detail'];
                agencyElement.textContent = translations[currentLanguage]['agency'];
                agencyServiceDetailElement.textContent = translations[currentLanguage]['agency_service_detail'];
                ourCoursesElement.textContent = translations[currentLanguage]['our_courses'];
                garmentIndustryElement.textContent = translations[currentLanguage]['garment_industry'];
                garmentIndustryDetailElement.textContent = translations[currentLanguage]['garment_industry_detail'];
                foodServiceElement.textContent = translations[currentLanguage]['food_service'];
                foodServiceDetailElement.textContent = translations[currentLanguage]['food_service_detail'];
                transportationCompanyElement.textContent = translations[currentLanguage]['transportation_company'];
                transportationCompanyDetailElement.textContent = translations[currentLanguage]['transportation_company_detail'];
                dyeingIndustryElement.textContent = translations[currentLanguage]['dyeing_industry'];
                dyeingIndustryDetailElement.textContent = translations[currentLanguage]['dyeing_industry_detail'];
                manufacturingCompanyElement.textContent = translations[currentLanguage]['manufacturing_company'];
                manufacturingCompanyDetailElement.textContent = translations[currentLanguage]['manufacturing_company_detail'];
                livestockIndudtryElement.textContent = translations[currentLanguage]['livestock_indudtry'];
                livestockIndudtryDetailElement.textContent = translations[currentLanguage]['livestock_indudtry_detail'];
                nursingCareElement.textContent = translations[currentLanguage]['nursing_care'];
                nursingCareDetailElement.textContent = translations[currentLanguage]['nursing_care_detail'];
                constructionIndustryElement.textContent = translations[currentLanguage]['construction_industry'];
                constructionIndustryDetailElement.textContent = translations[currentLanguage]['construction_industry_detail'];

                ourActivitiesElement.textContent = translations[currentLanguage]['our_activities'];
                activitiesDetailElement.textContent = translations[currentLanguage]['activities_detail'];
                activities1Element.textContent = translations[currentLanguage]['activities1'];
                activities2Element.textContent = translations[currentLanguage]['activities2'];
                activities3Element.textContent = translations[currentLanguage]['activities3'];
                activities4Element.textContent = translations[currentLanguage]['activities4'];
                activities5Element.textContent = translations[currentLanguage]['activities5'];
                activities6Element.textContent = translations[currentLanguage]['activities6'];
                activities7Element.textContent = translations[currentLanguage]['activities7'];
                activities8Element.textContent = translations[currentLanguage]['activities8'];
                ourFeaturesElement.textContent = translations[currentLanguage]['our_features'];
                featuresItem1Element.textContent = translations[currentLanguage]['features_item1'];
                featuresItem2Element.textContent = translations[currentLanguage]['features_item2'];
                featuresItem3Element.textContent = translations[currentLanguage]['features_item3'];
                featuresItem4Element.textContent = translations[currentLanguage]['features_item4'];
                roadMapTitleElement.textContent = translations[currentLanguage]['road_map_title'];
                roadMapDetail1Element.textContent = translations[currentLanguage]['road_map_detail1'];
                roadMapDetail2Element.textContent = translations[currentLanguage]['road_map_detail2'];
                roadMapDetail3Element.textContent = translations[currentLanguage]['road_map_detail3'];
                roadMapDetail4Element.textContent = translations[currentLanguage]['road_map_detail4'];
                roadMapDetail5Element.textContent = translations[currentLanguage]['road_map_detail5'];
                roadMapDetail6Element.textContent = translations[currentLanguage]['road_map_detail6'];
                contactSectionElement.textContent = translations[currentLanguage]['contactSection'];
                contactNameElement.textContent = translations[currentLanguage]['contact_name'];
                contactEmailElement.textContent = translations[currentLanguage]['contact_email'];
                contactMessageElement.textContent = translations[currentLanguage]['contact_message'];
                submitFormElement.textContent = translations[currentLanguage]['submit_form'];
                callUsElement.textContent = translations[currentLanguage]['call_us'];
                locationElement.textContent = translations[currentLanguage]['location'];
                openingHourElement.textContent = translations[currentLanguage]['opening_hour'];
                openingDayElement.textContent = translations[currentLanguage]['opening_day'];
                closingDayElement.textContent = translations[currentLanguage]['closing_day'];
                




            }
        }