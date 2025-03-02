fetch('data/snowboards.json')
    .then(response => response.json())
    .then(data => {
        const snowboards = data;
        document.getElementById('search-input').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const filtered = snowboards.filter(board => board.brand.toLowerCase().includes(query));
            displayResults(filtered);
        });
    });

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(result => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `<img src="${result.image}" alt="${result.model}"><p>${result.brand} - ${result.model}</p>`;
        resultsDiv.appendChild(div);
    });
}
