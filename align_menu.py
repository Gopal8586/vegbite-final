import re

file_path = r"c:\Users\GOPAL\Desktop\Vegbite\Server For VegBites!!\public\html\menu.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find price and button together
# <p class="price">₹70</p>
# <button class="add-to-cart-btn">Add to Cart</button>
pattern = re.compile(r'(<p class="price">.*?</p>)\s*(<button class="add-to-cart-btn">.*?</button>)', re.DOTALL)

def wrap_match(match):
    return f'<div class="price-action">\n          {match.group(1)}\n          {match.group(2)}\n        </div>'

new_content = pattern.sub(wrap_match, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Alignment wrapper added.")
