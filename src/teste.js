function calculateEstimate() {
    const area = document.getElementById('area').value;
    const costPerSquareMeter = 1000; // R$ 1000 por m²
    const totalCost = area * costPerSquareMeter;
    document.getElementById('result').innerText = `O custo estimado é R$ ${totalCost.toFixed(2)}`;
}
