document.addEventListener('DOMContentLoaded', function() {
    let specsData = {}; // Store JSON data

    // First load the JSON data
    fetch('../json/data.json') // Adjust path to your JSON file location
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            specsData = data;
            populateOptions();
            initializeNavigation();
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Mapping between HTML labels and JSON keys
    const optionMappings = {
        // Appearance Section
        'width': 'specifications_width',
        'length': 'specifications_length',
        'thickness': 'specifications_thickness',
        'angles': 'specifications_angles',
        'home-button': 'specifications_home_button',
        'rgb-backlight': 'specifications_rgb_backlight',
        'colors': 'specifications_colors',
        'antennas': 'specifications_antennas',

        // Display Section
        'display': 'specifications_display',
        'resolution': 'specifications_resolution',
        'refresh-rate': 'specifications_refresh_rate',
        'display-type': 'specifications_display_type',
        'protection': 'specifications_protection',
        'screen-density': 'specifications_screen_density',
        'hdr-screen': 'specifications_hdr_screen',

        // Camera Section
        'camera': 'specifications_camera',
        'number-of-cameras': 'specifications_num_cam',
        'camera-resolution': 'specifications_camera_resolution',
        'megapixels': 'specifications_mega_pixel',
        'ultra-wide': 'specifications_ultrawide_camera',
        'zoom': 'specifications_zoom',
        'portrait-mode': 'specifications_portrait_mode',
        'night-mode': 'specifications_night_mode',
        'cinimatic-mode': 'specifications_cinematic_mode',
        'vide-resolution': 'specifications_video_resolution',
        'video-fps': 'specifications_fps_video',
        'optical-stabilization': 'specifications_optical_stabilization',
        'slow-motion': 'specifications_slow_motion',
        'selfie-camera-resolution': 'specifications_selfie_camera_resolution',

        // Hard Drive Section
        'processor': 'specifications_harddrive_processor',
        'processor-series': 'specifications_harddrive_processor_series',
        'cache-memory': 'specifications_harddrive_cache_memory',
        'cors': 'specifications_harddrive_cores',
        'graphic-processor': 'specifications_harddrive_graphic_processor',
        'cpu-update-frequency': 'specifications_harddrive_cpu_update_frequency',
        'ram': 'specifications_harddrive_ram',
        'ram-type': 'specifications_harddrive_ram_type',

        // Devices Section
        'battery': 'specifications_battery',
        'network': 'specifications_network',
        'bluetooth': 'specifications_bluetooth',
        'mini-jack': 'specifications_mini_jack',
        'charge-type': 'specifications_charge_type',

        // Storage Section
        'rom': 'specifications_storage_rom',
        'micro-sd': 'specifications_storage_microsd',

        // Security Section
        'password': 'specifications_security_password',
        'pin': 'specifications_security_pin',
        'fingerprint': 'specifications_security_fingerprint',
        'face-recognition': 'specifications_security_face_id',

        // Sound Section
        'speaker': 'specifications_sound_speakers',
        'speaker-series': 'specifications_sound_speaker_series',
        'num-of-speakers': 'specifications_sound_no_of_speakers',
        'acostic-channel': 'specifications_sound_acoustic_channel',

        // Features Section
        'ai_photo_edit': 'specifications_ai_features_photo_edit',
        'ai_video_edit': 'specifications_ai_features_video_edit',
        'ai_photo_enhancer': 'specifications_ai_features_photo_enhancer',
        'ai_generative': 'specifications_ai_features_generative_ai'
    };

    function populateOptions() {
        // Get all labels in the design section
        const labels = document.querySelectorAll('#design-mobile label');
        
        labels.forEach(label => {
            const forAttribute = label.getAttribute('for');
            const optionsKey = optionMappings[forAttribute];
            const optionsDiv = label.nextElementSibling;

            if (!optionsKey || !specsData[optionsKey] || !optionsDiv) {
                console.warn(`Missing data for: ${forAttribute}`);
                return;
            }

            // Clear existing options
            optionsDiv.innerHTML = '';
            
            // Create new option buttons
            specsData[optionsKey].forEach(option => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = option;
                button.dataset.value = option;
                optionsDiv.appendChild(button);
            });
        });
    }

    function initializeNavigation() {
        // Handle section navigation
        document.querySelectorAll('.navbutton').forEach(button => {
            button.addEventListener('click', function() {
                const section = this.dataset.section;
                
                // Hide all sections
                document.querySelectorAll('.content-section').forEach(div => {
                    div.style.display = 'none';
                });
                
                // Show selected section
                const targetSection = document.getElementById(section);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            });
        });

        // Show first section by default
        const firstSection = document.querySelector('.content-section');
        if (firstSection) firstSection.style.display = 'block';
    }

    // Optional: Add click handlers for option buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('option-button')) {
            // Handle option selection
            const selectedValue = e.target.dataset.value;
            const parentLabel = e.target.closest('div').previousElementSibling;
            console.log(`Selected ${parentLabel.textContent.trim()}: ${selectedValue}`);
            // Add your selection handling logic here
        }
    });
});