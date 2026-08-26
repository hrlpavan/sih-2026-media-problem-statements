import re
import json
import html

with open('sih_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find all tables with id="settings"
tables = re.findall(r'<table\s+id="settings"[\s\S]*?</table>', content, re.IGNORECASE)
print(f"Total tables found: {len(tables)}")

problem_statements = []

for idx, t in enumerate(tables):
    ps = {'index': idx + 1}
    
    # Extract rows with <th> and <td>
    rows = re.findall(r'<tr>\s*<th[^>]*>([\s\S]*?)</th>\s*<td[^>]*>([\s\S]*?)</td>\s*</tr>', t, re.IGNORECASE)
    for th, td in rows:
        th_clean = re.sub(r'<[^>]+>', ' ', th).strip()
        th_clean = ' '.join(th_clean.split())
        
        # In td, convert <br> to newline, unescape html, strip tags
        td_text = re.sub(r'<br\s*/?>', '\n', td, flags=re.IGNORECASE)
        td_text = re.sub(r'<[^>]+>', ' ', td_text)
        td_clean = html.unescape(td_text).strip()
        td_clean = re.sub(r'[ \t]+', ' ', td_clean)
        # normalize newlines
        td_clean = re.sub(r'\n\s+', '\n', td_clean)
        
        ps[th_clean] = td_clean
    
    # Also extract links if present (e.g., youtube, dataset)
    yt_match = re.search(r'<th>Youtube Link</th>\s*<td>\s*<a\s+href="([^"]+)"', t, re.IGNORECASE)
    if yt_match:
        ps['Youtube Link URL'] = yt_match.group(1).strip()
        
    ds_match = re.search(r'<th>Dataset Link</th>\s*<td>[\s\S]*?<a\s+href="([^"]+)"', t, re.IGNORECASE)
    if ds_match:
        ps['Dataset Link URL'] = ds_match.group(1).strip()
        
    problem_statements.append(ps)

print(f"Parsed {len(problem_statements)} problem statements.")

with open('problem_statements.json', 'w', encoding='utf-8') as f:
    json.dump(problem_statements, f, indent=2, ensure_ascii=False)

print("Saved to problem_statements.json")
