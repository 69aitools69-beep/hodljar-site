# Voi crea fișierul JavaScript actualizat cu modificările pentru Solana
# Începu cu citirea și identificarea secțiunilor care trebuie modificate

# Citesc conținutul fișierului app.js pentru a identifica structura
with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Găsesc și afișez secțiunea relevantă pentru "How to Buy"
import re

# Caut secțiunea howToBuy pentru română
ro_howtobuy_pattern = r'"howToBuy-step-\d+-description":\s*"([^"]*)"'
matches = re.findall(ro_howtobuy_pattern, content)

print("Secțiunile How to Buy găsite în română:")
for i, match in enumerate(matches, 1):
    print(f"Step {i}: {match}")

# Caut și avertismentele
warnings_pattern = r'"howToBuy-warnings-[^"]*":\s*"([^"]*)"'
warning_matches = re.findall(warnings_pattern, content)

print("\nAvertismentele găsite:")
for warning in warning_matches:
    print(f"- {warning}")