import glob
import os
import re

active_dir = r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!"
html_files = glob.glob(os.path.join(active_dir, r"public\html\*.html"))
hbs_files = glob.glob(os.path.join(active_dir, r"templates\views\*.hbs"))

# Regex to safely remove both Testimonials and Gallery li items 
pattern = re.compile(r'\s*<li class="nav-item">\s*<a href="/#testimonials" class="nav-link">Testimonials</a>\s*</li>\s*<li class="nav-item">\s*<a href="/#gallery" class="nav-link">Gallery</a>\s*</li>', re.IGNORECASE)

for filepath in html_files + hbs_files:
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        new_content = pattern.sub('', content)
        
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Removed nav items from {os.path.basename(filepath)}")
    except Exception as e:
        pass

print("Done removing navbar items.")
