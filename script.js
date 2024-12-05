document.getElementById('accessBtn').addEventListener('click', () => {
    const warning = document.getElementById('warning');
    warning.textContent = 'Attempting to access permissions...';

    // Simulate camera access request
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
            warning.textContent = 'Camera access granted (simulated).';
        })
        .catch(() => {
            warning.textContent = 'Camera access denied (simulated).';
        });

    // Simulate location access
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            () => {
                warning.textContent += '\nLocation access granted (simulated).';
            },
            () => {
                warning.textContent += '\nLocation access denied (simulated).';
            }
        );
    }
});
