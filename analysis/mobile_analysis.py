import pandas as pd
import json

# Read the JSON file
with open('./json/mobile.json', 'r') as f:
    data = json.load(f)

# Flatten the nested JSON structure
flattened_data = []
for year_data in data:
    year = year_data['year']
    for phone in year_data['phones']:
        phone_data = {
            'year': year,
            'model': phone['model'],
            'review': phone['success_metric']
        }
        # Flatten specifications
        for key, value in phone['specifications'].items():
            phone_data[key] = str(value)  # Convert all values to string
        flattened_data.append(phone_data)

# Create DataFrame
df = pd.DataFrame(flattened_data)

# Export to Excel
df.to_excel('mobile_data.xlsx', index=False)