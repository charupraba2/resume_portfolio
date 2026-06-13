/**
 * Charuka P - Portfolio JavaScript
 * Premium interactive features, recruiter chatbot, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initProjectFilters();
    initChatbot();
    initContactForm();
    initGitHubStats();
});

/* ==========================================================================
   NAVIGATION LOGIC
   ========================================================================== */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Navbar Scroll Class
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

/* ==========================================================================
   SCROLL REVEAL & SKILLS ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const skillBars = document.querySelectorAll('.skill-progress');

    // Reset skill progress widths initially so they can animate in
    skillBars.forEach(bar => {
        // Store target width in custom property or dataset
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        bar.dataset.targetWidth = targetWidth;
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If it contains skill progress bars, animate them
                const bar = entry.target.querySelector('.skill-progress');
                if (bar) {
                    bar.style.width = bar.dataset.targetWidth;
                }
                
                // If the element itself is a progress bar, animate it
                if (entry.target.classList.contains('skill-progress')) {
                    entry.target.style.width = entry.target.dataset.targetWidth;
                }

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe reveal elements
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Observe individual skill progress bars too for reliability
    skillBars.forEach(bar => {
        revealObserver.observe(bar);
    });
}

/* ==========================================================================
   PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Quick transition effect
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95) translateY(10px)';

                setTimeout(() => {
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hide');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, 50);
                    } else {
                        card.classList.add('hide');
                    }
                }, 200);
            });
        });
    });

    // Smooth scroll for chatbot anchor trigger button in chatbot card
    const chatbotScrollBtn = document.querySelector('.btn-demo-scroll');
    if (chatbotScrollBtn) {
        chatbotScrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSec = document.getElementById('chatbot-interactive-section');
            if (targetSec) {
                targetSec.scrollIntoView({ behavior: 'smooth' });
                // Briefly flash the chatbot border to guide the recruiter's eye
                setTimeout(() => {
                    const terminal = document.querySelector('.chatbot-terminal');
                    if (terminal) {
                        terminal.style.borderColor = '#d946ef';
                        terminal.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(217, 70, 239, 0.3)';
                        setTimeout(() => {
                            terminal.style.borderColor = '';
                            terminal.style.boxShadow = '';
                        }, 2000);
                    }
                }, 850);
            }
        });
    }
}

/* ==========================================================================
   INTERACTIVE RECRUITER CHATBOT
   ========================================================================== */
function initChatbot() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatForm = document.getElementById('chatbot-form');
    const suggestionButtons = document.querySelectorAll('.suggest-btn');

    // Bot replies database
    const botReplies = {
        skills: `
            <div class="chat-response-title">Technical Expertise</div>
            Here is a breakdown of Charuka's skills:
            <ul class="chat-response-list">
                <li><strong>Languages:</strong> Python, SQL, JS, HTML/CSS, Java</li>
                <li><strong>Machine Learning:</strong> Scikit-learn, OpenCV (Computer Vision), NLTK (NLP), Pandas, NumPy</li>
                <li><strong>Web Development:</strong> Django, FastAPI, Flask, Streamlit, REST APIs</li>
                <li><strong>Cloud & Tools:</strong> AWS, Git, GitHub, Docker, Linux, Jupyter</li>
                <li><strong>Analytics:</strong> Power BI, Tableau, Excel</li>
            </ul>
            <br>
            Charuka is especially strong at integrating computer vision and NLP models into Python backends (like Django or Streamlit).
        `,
        experience: `
            <div class="chat-response-title">Work Experience</div>
            Charuka has completed and is actively working through internship roles focused on Python backend and ML integrations:
            <ul class="chat-response-list">
                <li><strong>Python & Django Intern</strong> at <em>Gateway Software Solutions</em> (May - Jun 2025): Developed backend modules, configured relational database queries, and integrated styled frontends.</li>
                <li><strong>Python Intern</strong> at <em>App-Angadi</em> (May 2024 - Present): Implemented backend APIs, led ML integrations and productionised ML prototypes (including TrendHunter AI), processed large datasets (10k+ records), and collaborated on deployments.</li>
            </ul>
        `,
        'smart-attendance': `
            <div class="chat-response-title">Smart Attendance System</div>
            This project uses computer vision and facial recognition models. Key results:
            <ul class="chat-response-list">
                <li><strong>98.2%</strong> face recognition accuracy.</li>
                <li>Uses a hybrid HOG + deep neural embedding pipeline.</li>
                <li>Optimised to run at <strong>4-6 FPS on standard CPU</strong> (no expensive GPU server required).</li>
                <li>Automated attendance marking, Excel reporting, and a Streamlit analytics dashboard.</li>
            </ul>
            Charuka has authored an academic research paper based on this system.
        `,
        resume: `
            <div class="chat-response-title">Resume Access</div>
            Certainly! You can download Charuka's current PDF resume right here:
            <br><br>
            <a href="resume.pdf" class="btn btn-primary" style="padding: 10px 20px; font-size: 13px;" download="Charuka_P_Resume.pdf">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; margin-right: 6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume PDF
            </a>
        `,
        contact: `
            <div class="chat-response-title">Contact & Socials</div>
            You can reach Charuka directly via:
            <ul class="chat-response-list">
                <li><strong>Email:</strong> <a href="mailto:charupraba2@gmail.com" style="color: #c084fc; text-decoration: underline;">charupraba2@gmail.com</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/charuka-p-91578b311/" target="_blank" style="color: #c084fc; text-decoration: underline;">charuka-p-91578b311</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/charupraba2/" target="_blank" style="color: #c084fc; text-decoration: underline;">charupraba2</a></li>
                <li><strong>Phone/WhatsApp:</strong> +91 7026973370</li>
            </ul>
        `,
        fallback: `
            I recognized your query! To get the most accurate answers, try asking about my <strong>skills</strong>, <strong>experience</strong>, <strong>projects</strong> (like the <strong>smart attendance</strong> system), or ask to get my <strong>resume</strong>.
        `,
        greeting: `
            Hello there! I'm ready to answer any questions about Charuka P's ML qualifications. What details can I fetch for you?
        `,
        thanks: `
            You're welcome! Let me know if you need to review her skills, projects, or grab her resume.
        `
    };

    // Suggestions clicks
    suggestionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            const queryText = btn.textContent;
            
            // Add user message
            addUserMessage(queryText);
            
            // Trigger bot response
            simulateBotResponse(query);
        });
    });

    // Form submit
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            // Add user message
            addUserMessage(text);
            chatInput.value = '';

            // Analyze input keywords
            const query = analyzeInputKeywords(text);
            
            // Trigger bot response
            simulateBotResponse(query);
        });
    }

    function addUserMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message user-msg';
        msgDiv.innerHTML = `
            <div class="user-avatar">Rec</div>
            <div class="msg-bubble">${escapeHtml(text)}</div>
        `;
        chatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function simulateBotResponse(queryKey) {
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-msg typing-indicator-msg';
        typingDiv.innerHTML = `
            <div class="bot-avatar">CP</div>
            <div class="msg-bubble typing-bubble">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        scrollToBottom();

        // Simulate network delay
        const delay = 800 + Math.random() * 500;
        setTimeout(() => {
            // Remove typing indicator
            const indicator = chatMessages.querySelector('.typing-indicator-msg');
            if (indicator) indicator.remove();

            // Fetch bot response
            const htmlContent = botReplies[queryKey] || botReplies['fallback'];

            // Add bot message
            const msgDiv = document.createElement('div');
            msgDiv.className = 'message bot-msg';
            msgDiv.innerHTML = `
                <div class="bot-avatar">CP</div>
                <div class="msg-bubble">${htmlContent}</div>
            `;
            chatMessages.appendChild(msgDiv);
            scrollToBottom();
        }, delay);
    }

    function analyzeInputKeywords(text) {
        const t = text.toLowerCase();
        
        if (t.includes('hello') || t.includes('hi') || t.includes('hey')) return 'greeting';
        if (t.includes('skill') || t.includes('languages') || t.includes('expert') || t.includes('stack') || t.includes('tech')) return 'skills';
        if (t.includes('experience') || t.includes('intern') || t.includes('work') || t.includes('job') || t.includes('app-angadi') || t.includes('gateway')) return 'experience';
        if (t.includes('attendance') || t.includes('face') || t.includes('cv') || t.includes('opencv') || t.includes('camera') || t.includes('vision')) return 'smart-attendance';
        if (t.includes('resume') || t.includes('cv') || t.includes('download') || t.includes('pdf')) return 'resume';
        if (t.includes('contact') || t.includes('email') || t.includes('linkedin') || t.includes('phone') || t.includes('reach') || t.includes('connect')) return 'contact';
        if (t.includes('thank') || t.includes('thanks') || t.includes('cool') || t.includes('great')) return 'thanks';
        
        return 'fallback';
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function escapeHtml(string) {
        return String(string)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}

/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status-message');
    const submitBtn = document.getElementById('btn-submit-contact');

    if (!form || !statusMsg) return;

    const origBtnText = submitBtn ? submitBtn.innerHTML : '';

    // If the form is configured to use an external service (FormSubmit/Formspree), allow normal submit
    const actionAttr = (form.getAttribute('action') || '').toLowerCase();
    const usesThirdParty = actionAttr.includes('formsubmit.co') || actionAttr.includes('formspree.io');

    if (usesThirdParty) {
        // Provide lightweight UI feedback but let the browser perform the POST (we set target="_blank" in HTML)
        form.addEventListener('submit', (e) => {
            // show informational status and briefly disable button to prevent double submits
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Opening contact form...</span>`;
            }
            statusMsg.className = 'form-message info';
            statusMsg.style.display = 'block';
            statusMsg.textContent = 'Opening contact form in a new tab. Complete the form to send the message.';

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnText;
                }
            }, 3000);
            // Do NOT call preventDefault — allow normal submission
        });

        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // UI Feedback: Disable button and show loading state
        if (submitBtn) submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span>Sending...</span>
            <svg class="btn-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        `;

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simulate API call to send email
        setTimeout(() => {
            // Restore button
            if (submitBtn) submitBtn.disabled = false;
            if (submitBtn) submitBtn.innerHTML = origBtnText;

            // Success feedback
            statusMsg.className = 'form-message success';
            statusMsg.textContent = `Thank you, ${name}! Your message has been sent successfully. Charuka will respond shortly.`;
            
            // Clear fields
            form.reset();

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                statusMsg.style.display = 'none';
            }, 6000);
            
        }, 1500);
    });
}

/* ==========================================================================
   GITHUB STATS FOR PROJECT CARDS
   - Finds repository links in project cards and fetches public repo stats
   ========================================================================== */
function initGitHubStats() {
    const repoLinks = document.querySelectorAll('.project-actions .btn-repo');
    if (!repoLinks || repoLinks.length === 0) return;

    repoLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const match = href.match(/github\.com\/([^\/]+)\/([^\/]+)(?:$|\/|\.git)/i);
        if (!match) return;

        const owner = match[1];
        const repo = match[2].replace(/\.git$/i, '');

        // Create the stats container and insert it after the project-actions
        const statsEl = document.createElement('div');
        statsEl.className = 'project-stats';
        statsEl.innerHTML = `
            <span class="stat-item">⭐ <strong>—</strong> Stars</span>
            <span class="stat-item">🍴 <strong>—</strong> Forks</span>
            <span class="stat-item">👀 <strong>—</strong> Watchers</span>
        `;

        // Append the stats element after the actions container
        link.closest('.project-card').querySelector('.project-actions').after(statsEl);

        // Fetch GitHub repo data (public API, rate-limited)
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then(resp => {
                if (!resp.ok) throw new Error('GitHub API error');
                return resp.json();
            })
            .then(data => {
                const stars = data.stargazers_count ?? '—';
                const forks = data.forks_count ?? '—';
                const watchers = data.watchers_count ?? '—';

                const items = statsEl.querySelectorAll('.stat-item strong');
                if (items[0]) items[0].textContent = stars;
                if (items[1]) items[1].textContent = forks;
                if (items[2]) items[2].textContent = watchers;
            })
            .catch(() => {
                // Leave placeholders if API call fails (no network or rate-limited)
            });
    });
}

