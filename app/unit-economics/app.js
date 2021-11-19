let calculateBtn = document.getElementById('calculate'),
    cellingPriceInput = document.getElementById('celling-price'),
    cogsInput = document.getElementById('cogs'),
    grossMarginInput = document.getElementById('gross-Margin'),
    salesMarketingInput = document.getElementById('sales-marketing'),
    operationsCostInput = document.getElementById('operations-cost'),
    netMarginInput = document.getElementById('net-margin'),
    cellingPriceValue,cogsValue,grossMarginValue,salesMarketingValue,
    operationsCostValue,netMarginValue;

function calculate(){

    // Get Gross Margin value
    cellingPriceValue = cellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = cellingPriceValue - cogsValue;

    // Get Net Margin value
    salesMarketingValue = salesMarketingInput.value;
    operationsCostValue = operationsCostInput.value;
    netMarginValue = grossMarginValue -(salesMarketingValue + operationsCostValue);
}

calculateBtn.addEventListener('click',calculate)