// Enhanced configuration with Rosalina's actual data
let avatarConfig = {
    name: "Rosalina Torres",
    role: "Data Analytics Engineering MS Candidate",
    email: "torres.ros@northeastern.edu",
    linkedin: "https://linkedin.com/in/rosalina2",
    github: "https://github.com/rosalinatorres888",
    location: "Boston, Massachusetts",
    theme: "tech",
    description: "Building AI that matters through advanced machine learning and data engineering. Currently pursuing MS at Northeastern University with 13 years of technology experience.",
    skills: [
        {
            name: "Machine Learning",
            icon: "🤖",
            items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"]
        },
        {
            name: "Data Engineering",
            icon: "🔧",
            items: ["Python", "SQL", "Apache Spark", "ETL Pipelines", "BigQuery", "Airflow"]
        },
        {
            name: "Cloud & DevOps",
            icon: "☁️",
            items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "MLOps"]
        },
        {
            name: "Analytics",
            icon: "📊",
            items: ["Tableau", "Power BI", "Plotly", "Statistical Analysis", "A/B Testing"]
        }
    ],
    projects: [
        {
            name: "Crypto ML Pipeline",
            icon: "📈",
            type: "Machine Learning",
            description: "Real-time cryptocurrency prediction system with 87% accuracy using ensemble methods and cloud deployment.",
            tech: ["Python", "TensorFlow", "AWS", "Real-time Processing"],
            link: "https://rosalina.sites.northeastern.edu/"
        },
        {
            name: "Sentiment Analyzer",
            icon: "💭",
            type: "Natural Language Processing",
            description: "Multi-language sentiment analysis tool with real-time visualization and API integration for global text processing.",
            tech: ["NLP", "React", "APIs", "Multi-language"],
            link: "https://rosalina.sites.northeastern.edu/"
        },
        {
            name: "World Cup Analytics",
            icon: "⚽",
            type: "Sports Analytics",
            description: "Real-time data hub for World Cup 2026 with ML predictions and interactive visualizations for match outcomes.",
            tech: ["Data Visualization", "Machine Learning", "Real-time", "Sports Data"],
            link: "https://rosalina.sites.northeastern.edu/"
        }
    ],
    experience: [
        {
            role: "AI Data Trainer, Bilingual",
            company: "Alignerr (by Labelbox)",
            period: "2023 — Present",
            description: "Specialized in LLM evaluation for factual accuracy and ethical integrity. Work with generative AI alignment tools and human-in-the-loop ML systems.",
            skills: ["LLM Evaluation", "AI Ethics", "Data Labeling", "HITL Systems"]
        },
        {
            role: "Regional Manager, Channel & Enterprise Sales",
            company: "Collibra",
            period: "2021 — 2023",
            description: "Drove $2.4M ARR growth in data intelligence solutions across LATAM. Managed partnerships with AWS, GCP, and Deloitte.",
            skills: ["Data Governance", "Enterprise Sales", "Partnership Management"]
        }
    ]
};

// Configuration panel functions
function toggleConfig() {
    const panel = document.getElementById('config-panel');
    panel.classList.toggle('open');
}

function applyConfiguration() {
    // Get values from form
    const name = document.getElementById('config-name').value;
    const role = document.getElementById('config-role').value;
    const location = document.getElementById('config-location').value;
    const email = document.getElementById('config-email').value;
    const linkedin = document.getElementById('config-linkedin').value;
    const github = document.getElementById('config-github').value;
    const theme = document.getElementById('config-theme').value;

    // Update config object
    avatarConfig.name = name;
    avatarConfig.role = role;
    avatarConfig.location = location;
    avatarConfig.email = email;
    avatarConfig.linkedin = linkedin;
    avatarConfig.github = github;
    avatarConfig.theme = theme;

    // Update UI elements
    updateUIElements();
    
    // Apply theme
    applyTheme(theme);
    
    // Show success message
    showNotification('Configuration updated successfully!', 'success');
    
    // Close panel
    setTimeout(() => {
        toggleConfig();
    }, 1000);
}

function updateUIElements() {
    // Update navigation
    document.getElementById('nav-name').textContent = avatarConfig.name;
    document.getElementById('nav-role').textContent = avatarConfig.role;
    
    // Update hero section
    document.getElementById('hero-name').textContent = avatarConfig.name;
    document.getElementById('hero-role').textContent = avatarConfig.role;
    
    // Update avatar initials
    const initials = avatarConfig.name.split(' ').map(n => n[0]).join('');
    document.getElementById('avatar-initials').textContent = initials;
}

function applyTheme(themeName) {
    // Remove existing theme classes
    document.body.classList.remove('theme-professional', 'theme-creative', 'theme-tech', 'theme-warm', 'theme-minimal');
    
    // Apply new theme
    if (themeName !== 'tech') {
        document.body.classList.add(`theme-${themeName}`);
    }
}

function exportConfiguration() {
    const configData = {
        ...avatarConfig,
        timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(configData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'rosalina-bot-config.json';
    link.click();
    
    showNotification('Configuration exported successfully!', 'success');
}

function showIntegrationCode() {
    document.getElementById('integration-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('integration-modal').style.display = 'none';
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#3b82f6',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '10001',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced bot with Rosalina's actual knowledge
class RosalinaBotDemo {
    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.createBotInterface();
        this.setupEventListeners();
        this.showWelcomeMessage();
    }

    createBotInterface() {
        this.container.innerHTML = `
            <div class="demo-bot-container">
                <div class="bot-header">
                    <div class="bot-avatar">🤖</div>
                    <div class="bot-info">
                        <h3>RosalinaBot</h3>
                        <p>AI Assistant Demo</p>
                    </div>
                    <button class="bot-toggle">−</button>
                </div>
                <div class="bot-chat-area">
                    <div class="messages-container" id="bot-messages"></div>
                    <div class="input-area">
                        <input type="text" id="user-input" placeholder="Ask about Rosalina's projects, skills, or experience...">
                        <button id="send-btn">Send</button>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const input = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const toggleBtn = this.container.querySelector('.bot-toggle');

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserMessage();
        });
        sendBtn.addEventListener('click', () => this.handleUserMessage());
        toggleBtn.addEventListener('click', () => this.toggleBot());
    }

    showWelcomeMessage() {
        this.addMessage('bot', `Hi! I'm RosalinaBot, an AI assistant created by Rosalina Torres. I can tell you about her background, the 87% accuracy Crypto ML Pipeline, her work at Northeastern University, and much more. What would you like to know?`);
    }

    handleUserMessage() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();
        if (!message) return;

        this.addMessage('user', message);
        input.value = '';

        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage('bot', response);
        }, 800);
    }

    generateResponse(message) {
        const msg = message.toLowerCase();

        if (msg.includes('crypto') || msg.includes('87%') || msg.includes('accuracy')) {
            return `The Crypto ML Pipeline is one of Rosalina's flagship projects! It's a real-time cryptocurrency prediction system that achieved 87% accuracy using ensemble machine learning methods. Built with Python, TensorFlow, and deployed on AWS, it demonstrates her ability to create production-ready ML systems with measurable business impact.`;
        }

        if (msg.includes('northeastern') || msg.includes('university') || msg.includes('gpa')) {
            return `Rosalina is currently pursuing her MS in Data Analytics Engineering at Northeastern University with a perfect 4.0 GPA. She's part of the Class of 2026 and combines rigorous academic excellence with 13 years of practical industry experience. Her mission is "Building AI that matters."`;
        }

        if (msg.includes('experience') || msg.includes('years') || msg.includes('background')) {
            return `Rosalina brings 13 years of technology experience! She's currently an AI Data Trainer at Alignerr (by Labelbox), specializing in LLM evaluation. Previously, she drove $2.4M ARR growth at Collibra and achieved 135% quota at Oracle. This unique combination of AI expertise and business acumen makes her exceptionally valuable.`;
        }

        if (msg.includes('skill') || msg.includes('technical') || msg.includes('technology')) {
            return `Rosalina's technical skills span the full AI/ML stack: Machine Learning (TensorFlow, PyTorch, Scikit-learn), Data Engineering (Python, SQL, Apache Spark), Cloud & DevOps (AWS, GCP, Docker), and Analytics (Tableau, Statistical Analysis). She's trilingual (English, Spanish, Portuguese) and combines technical depth with business understanding.`;
        }

        if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work')) {
            return `Besides the 87% accuracy Crypto ML Pipeline, Rosalina has built a Multi-language Sentiment Analyzer with real-time visualization and a World Cup Analytics platform with ML predictions. Each project demonstrates end-to-end capabilities from data collection to deployment. You can see more at rosalina.sites.northeastern.edu!`;
        }

        if (msg.includes('internship') || msg.includes('summer') || msg.includes('2025')) {
            return `Yes! Rosalina is actively seeking Summer 2025 ML/AI internship opportunities. With her 4.0 GPA, 13 years of experience, and proven track record (like the 87% accuracy ML pipeline), she can contribute from day one. Contact her at torres.ros@northeastern.edu`;
        }

        if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
            return `You can reach Rosalina at torres.ros@northeastern.edu, connect on LinkedIn (linkedin.com/in/rosalina2), or check out her GitHub (github.com/rosalinatorres888). Her full portfolio is at rosalina.sites.northeastern.edu. She's based in Boston and very responsive to opportunities!`;
        }

        if (msg.includes('demo') || msg.includes('bot') || msg.includes('ai assistant')) {
            return `This demo showcases Rosalina's ability to build intelligent systems! The bot uses advanced JavaScript for natural language processing, contextual responses, and real-time configuration. It demonstrates her skills in AI logic design, UX/UI development, and creating user-friendly interfaces for complex technology.`;
        }

        if (msg.includes('theme') || msg.includes('configuration') || msg.includes('customize')) {
            return `Great question! This demo includes a full configuration system accessible via the ⚙️ button. You can customize themes, personal information, and export configurations. It showcases real-time UI updates and demonstrates how enterprise software can be made user-friendly and configurable.`;
        }

        if (msg.includes('code') || msg.includes('github') || msg.includes('programming')) {
            return `Rosalina's coding expertise spans multiple languages and frameworks! She's proficient in Python (her primary ML language), JavaScript/React (for web development), SQL (for data analysis), and cloud technologies like AWS and GCP. Check out her GitHub at github.com/rosalinatorres888 for code samples and projects.`;
        }

        if (msg.includes('trilingual') || msg.includes('language') || msg.includes('spanish') || msg.includes('portuguese')) {
            return `Yes! Rosalina is trilingual, fluent in English, Spanish, and Portuguese. This linguistic diversity, combined with her technical expertise, makes her valuable for global teams and international projects. Her multilingual skills have been particularly useful in her AI data training work and LATAM business development.`;
        }

        return `That's a great question! I'm here to showcase Rosalina's impressive background in data analytics and AI. She's a 4.0 GPA MS student at Northeastern with 13 years of experience, known for projects like the 87% accuracy Crypto ML Pipeline. Feel free to ask about her technical skills, projects, experience, or internship opportunities!`;
    }

    addMessage(sender, text) {
        const messagesContainer = document.getElementById('bot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    toggleBot() {
        const chatArea = this.container.querySelector('.bot-chat-area');
        const toggleBtn = this.container.querySelector('.bot-toggle');
        const isMinimized = chatArea.style.display === 'none';
        
        chatArea.style.display = isMinimized ? 'flex' : 'none';
        toggleBtn.textContent = isMinimized ? '−' : '+';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize bot after page loads
    setTimeout(() => {
        const botContainer = document.getElementById('bot-container');
        new RosalinaBotDemo(botContainer);
    }, 1000);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('integration-modal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Initialize theme
    applyTheme(avatarConfig.theme);
    updateUIElements();
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Adjust bot position on mobile
    const botContainer = document.querySelector('.demo-bot-container');
    if (botContainer && window.innerWidth <= 768) {
        botContainer.style.width = '90vw';
        botContainer.style.right = '5vw';
    } else if (botContainer) {
        botContainer.style.width = '380px';
        botContainer.style.right = '20px';
    }
});