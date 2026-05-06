import glob
import os
import re

backup_dir = r"c:\Users\GOPAL\Desktop\Images\Vegbite\Server For VegBites!!"
active_dir = r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!"

html_files = glob.glob(os.path.join(active_dir, r"public\html\*.html"))
hbs_files = glob.glob(os.path.join(active_dir, r"templates\views\*.hbs"))

for active_path in html_files + hbs_files:
    rel_path = os.path.relpath(active_path, active_dir)
    backup_path = os.path.join(backup_dir, rel_path)
    
    if os.path.exists(backup_path):
        with open(active_path, "r", encoding="utf-8") as f:
            active_content = f.read()
        with open(backup_path, "r", encoding="utf-8") as f:
            backup_content = f.read()
            
        backup_head_match = re.search(r'(<head>.*?</head>)', backup_content, re.IGNORECASE | re.DOTALL)
        if backup_head_match:
            backup_head = backup_head_match.group(1)
            
            # Apply our custom fixes that we did today to the header so they aren't lost
            if "About.html" in rel_path or "index.hbs" in rel_path:
                backup_head = re.sub(r'\s*<link[^>]*href=[\'"]/?css/Signup.css[\'"][^>]*>', '', backup_head, flags=re.IGNORECASE)
                
            if "Contact.html" in rel_path:
                if "HomePageStyles.css" not in backup_head:
                    backup_head = backup_head.replace('</head>', '    <link rel="stylesheet" href="/css/HomePageStyles.css">\n</head>')
                    
            if "menu.html" in rel_path:
                if "HomePageStyles.css" not in backup_head:
                    backup_head = backup_head.replace('</head>', '    <link rel="stylesheet" href="/css/HomePageStyles.css">\n</head>')
            
            # Replace active head
            active_content = re.sub(r'<head>.*?</head>', backup_head, active_content, count=1, flags=re.IGNORECASE | re.DOTALL)
            
            with open(active_path, "w", encoding="utf-8") as f:
                f.write(active_content)
        else:
            print(f"No <head> found in backup {rel_path}")
    else:
        print(f"Backup file not found for {rel_path}")
        
# Fix bot.css
bot_css_path = os.path.join(active_dir, r"public\css\bot.css")
if os.path.exists(bot_css_path):
    with open(bot_css_path, "r", encoding="utf-8") as f:
        bot_content = f.read()
    bot_content = re.sub(r'body\s*{[^}]*}', '/* Removed global body block */', bot_content, count=1)
    with open(bot_css_path, "w", encoding="utf-8") as f:
        f.write(bot_content)

print("Restore complete.")
