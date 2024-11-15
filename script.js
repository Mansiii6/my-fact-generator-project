document.getElementById('factForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const facts = generateFunFacts(name);
    displayFunFacts(facts);
});

function generateFunFacts(name) {
    return [
        `${name} is a creative enthusiast who loves art and craft.`,
        `${name} has a keen interest in fashion and shopping.`,
        `${name} loves traveling and exploring new places and cultures.`
    ];
}

function displayFunFacts(facts) {
    const funFactsSection = document.getElementById('funFacts');
    funFactsSection.innerHTML = '';
    facts.forEach(fact => {
        const factElement = document.createElement('p');
        factElement.textContent = fact;
        funFactsSection.appendChild(factElement);
    });
}
