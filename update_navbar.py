import os
import re

active_dir = r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!"

files_to_edit = [
    os.path.join(active_dir, r"templates\views\index.hbs"),
    os.path.join(active_dir, r"public\html\About.html"),
    os.path.join(active_dir, r"public\html\Contact.html"),
    os.path.join(active_dir, r"public\html\menu.html")
]

for filepath in files_to_edit:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}")
        continue
        
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Step 1: Remove the signup list item from INSIDE .nav-menu
    content = re.sub(r'\s*<li>\s*<a href="/signup"[^>]*><button class="login-btn">LOG IN</button></a>\s*</li>', '', content)
    
    # Step 2: Inject it outside .nav-menu, right before the menu-open-button. Only if not already injected.
    if '<a href="/signup" style="text-decoration: none;"><button class="login-btn">LOG IN</button></a>' not in content:
        content = re.sub(r'(<button id="menu-open-button")', r'<a href="/signup" style="text-decoration: none;"><button class="login-btn">LOG IN</button></a>\n        \1', content)
    
    # Step 3: Inject the inline JavaScript right before </header>
    if "const currentPath =" not in content:
        script = """      <script>
        document.addEventListener("DOMContentLoaded", () => {
          let currentPath = window.location.pathname;
          // Small fix for dynamic routing variations
          if (currentPath === '' || currentPath === ' ') currentPath = '/';
          
          document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || (currentPath === '/' && href === '/')) {
              link.classList.add('active');
            }
          });
        });
      </script>
    </header>"""
        content = content.replace("</header>", script)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Navbar extracted and JS injected.")
