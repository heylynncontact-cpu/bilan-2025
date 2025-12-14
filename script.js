// Navigation entre pages
let currentPageIndex = 0;
const pages = [
    'page-home',
    'page-identity',
    'page-intro-step1',
    'page-5things-past',
    'page-5things-future',
    'page-intro-events',
    'page-events-q1',
    'page-events-q2',
    'page-events-q3',
    'page-events-q4',
    'page-intro-balance',
    'page-balance-1',
    'page-balance-2',
    'page-intro-emotional',
    'page-emotional-positive',
    'page-emotional-negative',
    'page-emotional-lessons',
    'page-intro-pillars',
    'page-pillars',
    'page-final'
];

// Données des notes étoiles
const ratings = {
    rating_self_love: 0,
    rating_relation: 0,
    rating_finance: 0,
    rating_mental_health: 0,
    rating_physical_health: 0,
    rating_work: 0
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initStarRatings();
    updateProgressBar();
});

// Modal de confidentialité
function showPrivacyModal() {
    document.getElementById('privacyModal').classList.add('show');
}

function closePrivacyModal() {
    document.getElementById('privacyModal').classList.remove('show');
    nextPage();
}

// Navigation
function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        document.getElementById(pages[currentPageIndex]).classList.remove('active');
        currentPageIndex++;
        document.getElementById(pages[currentPageIndex]).classList.add('active');
        updateProgressBar();
        window.scrollTo(0, 0);
    }
}

function previousPage() {
    if (currentPageIndex > 0) {
        document.getElementById(pages[currentPageIndex]).classList.remove('active');
        currentPageIndex--;
        document.getElementById(pages[currentPageIndex]).classList.add('active');
        updateProgressBar();
        window.scrollTo(0, 0);
    }
}

// Barre de progression
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    
    if (currentPageIndex === 0) {
        progressBar.classList.remove('visible');
    } else {
        progressBar.classList.add('visible');
        const progress = (currentPageIndex / (pages.length - 1)) * 100;
        progressFill.style.width = progress + '%';
    }
}

// Système d'étoiles
function initStarRatings() {
    const starContainers = document.querySelectorAll('.star-rating');
    
    starContainers.forEach(container => {
        const ratingId = container.dataset.ratingId;
        const stars = container.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const value = index + 1;
                ratings[ratingId] = value;
                updateStars(container, value);
            });
            
            star.addEventListener('mouseenter', () => {
                updateStars(container, index + 1, true);
            });
        });
        
        container.addEventListener('mouseleave', () => {
            updateStars(container, ratings[ratingId]);
        });
    });
}

function updateStars(container, value, isHover = false) {
    const stars = container.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Collecte de toutes les données
function collectAllData() {
    return {
        identity: {
            firstName: document.getElementById('firstName')?.value || '',
            age: document.getElementById('age')?.value || ''
        },
        fiveThings: {
            past: [
                document.getElementById('past1')?.value || '',
                document.getElementById('past2')?.value || '',
                document.getElementById('past3')?.value || '',
                document.getElementById('past4')?.value || '',
                document.getElementById('past5')?.value || ''
            ],
            future: [
                document.getElementById('future1')?.value || '',
                document.getElementById('future2')?.value || '',
                document.getElementById('future3')?.value || '',
                document.getElementById('future4')?.value || '',
                document.getElementById('future5')?.value || ''
            ]
        },
        events: {
            q1: {
                janvier: document.getElementById('event_jan')?.value || '',
                fevrier: document.getElementById('event_feb')?.value || '',
                mars: document.getElementById('event_mar')?.value || ''
            },
            q2: {
                avril: document.getElementById('event_apr')?.value || '',
                mai: document.getElementById('event_may')?.value || '',
                juin: document.getElementById('event_jun')?.value || ''
            },
            q3: {
                juillet: document.getElementById('event_jul')?.value || '',
                aout: document.getElementById('event_aug')?.value || '',
                septembre: document.getElementById('event_sep')?.value || ''
            },
            q4: {
                octobre: document.getElementById('event_oct')?.value || '',
                novembre: document.getElementById('event_nov')?.value || '',
                decembre: document.getElementById('event_dec')?.value || ''
            }
        },
        lifeBalance: {
            selfLove: {
                rating: ratings.rating_self_love,
                description: document.getElementById('desc_self_love')?.value || ''
            },
            relation: {
                rating: ratings.rating_relation,
                description: document.getElementById('desc_relation')?.value || ''
            },
            finance: {
                rating: ratings.rating_finance,
                description: document.getElementById('desc_finance')?.value || ''
            },
            mentalHealth: {
                rating: ratings.rating_mental_health,
                description: document.getElementById('desc_mental_health')?.value || ''
            },
            physicalHealth: {
                rating: ratings.rating_physical_health,
                description: document.getElementById('desc_physical_health')?.value || ''
            },
            work: {
                rating: ratings.rating_work,
                description: document.getElementById('desc_work')?.value || ''
            }
        },
        emotionalBalance: {
            positive: {
                human: document.getElementById('emo_pos_human')?.value || '',
                performance: document.getElementById('emo_pos_perf')?.value || '',
                result: document.getElementById('emo_pos_result')?.value || ''
            },
            negative: {
                human: document.getElementById('emo_neg_human')?.value || '',
                performance: document.getElementById('emo_neg_perf')?.value || '',
                result: document.getElementById('emo_neg_result')?.value || ''
            },
            lessons: {
                human: document.getElementById('emo_lesson_human')?.value || '',
                performance: document.getElementById('emo_lesson_perf')?.value || '',
                result: document.getElementById('emo_lesson_result')?.value || ''
            }
        },
        pillars: [
            {
                name: document.getElementById('pillar_name_1')?.value || '',
                description: document.getElementById('pillar_desc_1')?.value || ''
            },
            {
                name: document.getElementById('pillar_name_2')?.value || '',
                description: document.getElementById('pillar_desc_2')?.value || ''
            },
            {
                name: document.getElementById('pillar_name_3')?.value || '',
                description: document.getElementById('pillar_desc_3')?.value || ''
            },
            {
                name: document.getElementById('pillar_name_4')?.value || '',
                description: document.getElementById('pillar_desc_4')?.value || ''
            },
            {
                name: document.getElementById('pillar_name_5')?.value || '',
                description: document.getElementById('pillar_desc_5')?.value || ''
            }
        ]
    };
}

// Génération du PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const data = collectAllData();
    
    let yPosition = 20;
    const pageHeight = 280;
    const lineHeight = 7;
    const margin = 20;
    
    // Fonction pour ajouter du texte avec retour à la ligne automatique
    function addText(text, x, y, maxWidth, options = {}) {
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y, options);
        return lines.length * lineHeight;
    }
    
    // Fonction pour vérifier si on doit ajouter une nouvelle page
    function checkNewPage(neededSpace = 20) {
        if (yPosition + neededSpace > pageHeight) {
            doc.addPage();
            yPosition = 20;
        }
    }
    
    // Page de garde
    doc.setFontSize(32);
    doc.setFont(undefined, 'bold');
    doc.text('Bilan 2025', 105, 100, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setFont(undefined, 'normal');
    if (data.identity.firstName) {
        doc.text(data.identity.firstName, 105, 120, { align: 'center' });
    }
    
    doc.setFontSize(10);
    doc.text('Créé via le template d\'Haude Georgelin', 105, 270, { align: 'center' });
    doc.text('© 2025 Claque Doigts - Tous droits réservés', 105, 280, { align: 'center' });
    
    // Nouvelle page pour le contenu
    doc.addPage();
    yPosition = 20;
    
    // Section 5 choses vs 5 ans
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('5 choses vs 5 ans', margin, yPosition);
    yPosition += 15;
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Ce que je n\'avais pas il y a 5 ans :', margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    data.fiveThings.past.forEach((item, index) => {
        if (item) {
            checkNewPage();
            yPosition += addText(`${index + 1}. ${item}`, margin, yPosition, 170);
            yPosition += 5;
        }
    });
    
    yPosition += 10;
    checkNewPage(20);
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Ce que je voudrais dans 5 ans :', margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    data.fiveThings.future.forEach((item, index) => {
        if (item) {
            checkNewPage();
            yPosition += addText(`${index + 1}. ${item}`, margin, yPosition, 170);
            yPosition += 5;
        }
    });
    
    // Section Événements Marquants
    yPosition += 15;
    checkNewPage(30);
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Évènements Marquants 2025', margin, yPosition);
    yPosition += 15;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    const months = {
        q1: ['Janvier', 'Février', 'Mars'],
        q2: ['Avril', 'Mai', 'Juin'],
        q3: ['Juillet', 'Août', 'Septembre'],
        q4: ['Octobre', 'Novembre', 'Décembre']
    };
    
    Object.keys(data.events).forEach(quarter => {
        const quarterData = data.events[quarter];
        const monthNames = months[quarter];
        
        Object.keys(quarterData).forEach((month, index) => {
            if (quarterData[month]) {
                checkNewPage();
                doc.setFont(undefined, 'bold');
                doc.text(`${monthNames[index]} :`, margin, yPosition);
                yPosition += 7;
                doc.setFont(undefined, 'normal');
                yPosition += addText(quarterData[month], margin, yPosition, 170);
                yPosition += 8;
            }
        });
    });
    
    // Section Life Balance
    yPosition += 15;
    checkNewPage(30);
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Life Balance', margin, yPosition);
    yPosition += 15;
    
    doc.setFontSize(10);
    
    const balanceCategories = [
        { key: 'selfLove', title: 'Amour de soi' },
        { key: 'relation', title: 'Relations' },
        { key: 'finance', title: 'Finances' },
        { key: 'mentalHealth', title: 'Santé mentale' },
        { key: 'physicalHealth', title: 'Santé physique' },
        { key: 'work', title: 'Travail/Études' }
    ];
    
    balanceCategories.forEach(cat => {
        const item = data.lifeBalance[cat.key];
        if (item.rating > 0 || item.description) {
            checkNewPage();
            doc.setFont(undefined, 'bold');
            doc.text(`${cat.title} - Note: ${item.rating}/5`, margin, yPosition);
            yPosition += 7;
            if (item.description) {
                doc.setFont(undefined, 'normal');
                yPosition += addText(item.description, margin, yPosition, 170);
            }
            yPosition += 10;
        }
    });
    
    // Section Bilan émotionnel
    yPosition += 15;
    checkNewPage(30);
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Bilan Émotionnel', margin, yPosition);
    yPosition += 15;
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Points positifs :', margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    if (data.emotionalBalance.positive.human) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Humain :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.positive.human, margin, yPosition, 170);
        yPosition += 8;
    }
    
    if (data.emotionalBalance.positive.performance) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Performance :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.positive.performance, margin, yPosition, 170);
        yPosition += 8;
    }
    
    if (data.emotionalBalance.positive.result) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Résultat :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.positive.result, margin, yPosition, 170);
        yPosition += 8;
    }
    
    yPosition += 10;
    checkNewPage(20);
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Points négatifs :', margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    if (data.emotionalBalance.negative.human) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Humain :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.negative.human, margin, yPosition, 170);
        yPosition += 8;
    }
    
    if (data.emotionalBalance.negative.performance) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Performance :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.negative.performance, margin, yPosition, 170);
        yPosition += 8;
    }
    
    if (data.emotionalBalance.negative.result) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Résultat :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.negative.result, margin, yPosition, 170);
        yPosition += 8;
    }
    
    yPosition += 10;
    checkNewPage(20);
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Leçons apprises :', margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    if (data.emotionalBalance.lessons.human) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Humain :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.lessons.human, margin, yPosition, 170);
        yPosition += 8;
    }
    
    if (data.emotionalBalance.lessons.performance) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Performance :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.lessons.performance, margin, yPosition, 170);
        yPosition += 8;
    }
    
    if (data.emotionalBalance.lessons.result) {
        checkNewPage();
        doc.setFont(undefined, 'bold');
        doc.text('Résultat :', margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        yPosition += addText(data.emotionalBalance.lessons.result, margin, yPosition, 170);
        yPosition += 8;
    }
    
    // Section 5 Pilliers
    yPosition += 15;
    checkNewPage(30);
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Mes 5 Pilliers pour 2026', margin, yPosition);
    yPosition += 15;
    
    doc.setFontSize(10);
    
    data.pillars.forEach((pillar, index) => {
        if (pillar.name || pillar.description) {
            checkNewPage();
            doc.setFont(undefined, 'bold');
            doc.text(`${index + 1}. ${pillar.name || 'Sans titre'}`, margin, yPosition);
            yPosition += 7;
            if (pillar.description) {
                doc.setFont(undefined, 'normal');
                yPosition += addText(pillar.description, margin, yPosition, 170);
            }
            yPosition += 10;
        }
    });
    
    // Page finale
    doc.addPage();
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('Merci d\'avoir complété votre bilan 2025 !', 105, 140, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('Belle année 2026 à vous !', 105, 160, { align: 'center' });
    
    doc.setFontSize(10);
    doc.text('© 2025 Claque Doigts - Tous droits réservés', 105, 280, { align: 'center' });
    
    // Téléchargement
    const fileName = data.identity.firstName 
        ? `Bilan_2025_${data.identity.firstName}.pdf`
        : 'Bilan_2025.pdf';
    
    doc.save(fileName);
}
