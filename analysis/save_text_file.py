import json

# Load the JSON file
with open('./json/mobile.json', 'r') as file:
    data = json.load(file)  # Load JSON as a list

unique_values = {}

# Traverse the JSON data
for entry in data:  # Each entry corresponds to a year and its phones
    year = entry.get('year')
    if 'year' not in unique_values:
        unique_values['year'] = set()
    unique_values['year'].add(year)
    
    phones = entry.get('phones', [])  # Get the list of phones for the year
    for phone in phones:
        for field, value in phone.items():
            if field not in unique_values:
                unique_values[field] = set()
            if isinstance(value, dict):  # Handle nested dictionaries
                for sub_field, sub_value in value.items():
                    sub_field_full = f"{field}_{sub_field}"
                    if sub_field_full not in unique_values:
                        unique_values[sub_field_full] = set()
                    if isinstance(sub_value, dict):
                        # Convert dictionary to a string representation
                        unique_values[sub_field_full].add(str(sub_value))
                    elif isinstance(sub_value, list):
                        unique_values[sub_field_full].update(map(str, sub_value))
                    else:
                        unique_values[sub_field_full].add(sub_value)
            elif isinstance(value, list):  # Handle lists
                unique_values[field].update(map(str, value))
            else:
                unique_values[field].add(value)

# Format the output for the text file
output_lines = []
for field, values in unique_values.items():
    formatted_values = ', '.join([str(value) for value in sorted(values)])
    output_lines.append(f"{field}: [{formatted_values}]\n")

# Save to a text file
with open('unique_values_summary.txt', 'w') as output_file:
    output_file.writelines(output_lines)

print("Unique values summary saved to 'unique_values_summary.txt'")


