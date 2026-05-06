import os
import glob
import re

base_dir = r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!\public\css"

mappings = {
    "pages.css": ["About.css", "contact.css", "Privacy.css", "Refund.css", "Signup.css"],
    "cart.css": ["cart.css", "modern-cart.css"],
    "menu.css": ["Menu.css", "modern-menu.css"],
    "home.css": ["HomePageStyles.css", "modern-home.css"],
    "layout.css": ["footer.css", "modern-vegbites-footer.css", "modern-navbar.css"],
    "responsive.css": ["Responsive.css", "modern-responsive.css"],
}

print("1. Merging files...")
for out_file, in_files in mappings.items():
    out_path = os.path.join(base_dir, out_file)
    with open(out_path, "w", encoding="utf-8") as outfile:
        # We start by ensuring UTF-8
        for in_file in in_files:
            in_path = os.path.join(base_dir, in_file)
            if os.path.exists(in_path):
                print(f"  Mergiug {in_file} -> {out_file}")
                # Add header comment exactly as requested by user
                header = f"\n/* {'=' * 5} {in_file.upper()} {'=' * 5} */\n"
                outfile.write(header)
                with open(in_path, "r", encoding="utf-8") as infile:
                    outfile.write(infile.read())
                    outfile.write("\n")
            else:
                print(f"  Warning: {in_file} not found!")

print("2. Renaming main CSS file...")
vegbites2 = os.path.join(base_dir, "Vegbites2.css")
main_css = os.path.join(base_dir, "main.css")
if os.path.exists(vegbites2):
    print("  Renaming Vegbites2.css to main.css")
    with open(vegbites2, "r", encoding="utf-8") as infile:
        with open(main_css, "w", encoding="utf-8") as outfile:
            outfile.write(infile.read())

print("3. Creating empty modern.css placeholder...")
modern_css = os.path.join(base_dir, "modern.css")
with open(modern_css, "w", encoding="utf-8") as outfile:
    outfile.write("/* modern.css - placeholder as per user request to maintain structure */\n")

print("4. Updating HTML links...")
html_files = glob.glob(r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!\public\html\*.html")
hbs_files = glob.glob(r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!\templates\views\*.hbs")
all_files = html_files + hbs_files

css_replacements = {
    "About.css": "pages.css",
    "contact.css": "pages.css",
    "Privacy.css": "pages.css",
    "Refund.css": "pages.css",
    "Signup.css": "pages.css",
    "modern-cart.css": "cart.css",
    "Menu.css": "menu.css",
    "modern-menu.css": "menu.css",
    "HomePageStyles.css": "home.css",
    "modern-home.css": "home.css",
    "footer.css": "layout.css",
    "modern-vegbites-footer.css": "layout.css",
    "modern-navbar.css": "layout.css",
    "Responsive.css": "responsive.css",
    "modern-responsive.css": "responsive.css",
    "Vegbites2.css": "main.css",
}

for filepath in all_files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace substrings case-insensitively
    for old_css, new_css in css_replacements.items():
        pattern = re.compile(re.escape(old_css), re.IGNORECASE)
        content = pattern.sub(new_css, content)
        
    lines = content.split('\n')
    output_lines = []
    seen_links = set()
    for line in lines:
        if '<link ' in line and 'stylesheet' in line:
            match = re.search(r'href=[\'"](.*?)[\'"]', line)
            if match:
                href = match.group(1).lower()
                if href in seen_links:
                    continue  # skip duplicate CSS imports for this page
                seen_links.add(href)
        output_lines.append(line)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write('\n'.join(output_lines))

print("5. Deleting old CSS files to keep it clean...")
files_to_delete = list(css_replacements.keys())
for filename in files_to_delete:
    p = os.path.join(base_dir, filename)
    if os.path.exists(p):
        print(f"  Deleting {filename}")
        os.remove(p)

print("All done successfully!")
