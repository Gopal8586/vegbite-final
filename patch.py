import re

filepath = "templates/views/login.hbs"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Heading
content = re.sub(r'<div id="welcomeBack">Welcome back, Gopal!</div>', r'<div id="welcomeBack">Welcome back, Gopal! 🎉</div>', content)
content = re.sub(r'<h2>Welcome</h2>', r'<h2>Welcome back 👋</h2>\n                    <p class="tagline">Authentic flavors, just a click away.</p>', content)
content = re.sub(r'<span>Login with Email</span>', r'<span style="display: block; margin-top: 5px;">Sign in to continue your cravings 🍜</span>', content)

# Form
content = re.sub(r'<form id="loginForm" action="/login" method="post">', r'<form id="loginForm" action="/login" method="post" novalidate>', content)
content = re.sub(r'<span class="floating-label">Email Id</span>', r'<span class="floating-label">Email address</span>', content)
content = re.sub(r'(<input id="emailInput" name="email" type="email" placeholder="zero@gmail.com" required autocomplete="email">\s*</div>)', r'\1\n                        <div class="helper-text" id="emailHelper"><i class="fas fa-shield-alt"></i> We\'ll never share your email</div>\n                        <div class="error-message" id="emailError"><i class="fas fa-exclamation-circle"></i> Please enter a valid email address</div>', content)

content = re.sub(r'(<i class="fas fa-eye" id="togglePassword"></i>\s*</div>)', r'\1\n                        <div class="helper-text" id="passwordHelper"><i class="fas fa-info-circle"></i> Must be at least 6 characters</div>\n                        <div class="error-message" id="passwordError"><i class="fas fa-exclamation-circle"></i> Password must be at least 6 characters</div>', content)

# Options
content = re.sub(r'<span>Remember me</span>', r'<span>Keep me logged in</span>', content)
content = re.sub(r'<a href="#">Forgot password\?</a>', r'<a href="#">Forgot your password?</a>', content)
content = re.sub(r'<span class="btn-text">LOGIN</span>', r'<span class="btn-text">Continue to VegBites 🍽️</span>', content)

# Social
content = re.sub(r'data-tooltip="Google"', r'data-tooltip="Continue with Google"', content)
content = re.sub(r'data-tooltip="Facebook"', r'data-tooltip="Continue with Facebook"', content)
content = re.sub(r'data-tooltip="Apple"', r'data-tooltip="Continue with Apple"', content)

# Register link
content = re.sub(r'Don\'t have account\? <a href="/signup">Register Now</a>', r'New here? <a href="/signup">Create your account</a><br>\n                        <span style="font-size: 0.8rem; color: #94a3b8; margin-top: 5px; display: inline-block;">Join VegBites today 🍽️</span>', content)


with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Template successfully updated!")
