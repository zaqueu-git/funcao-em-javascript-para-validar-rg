function rg(value) {
    let rg = value;
    rg = rg.replace(/\./g, '');
    rg = rg.replace('-', '');

    if (/^(?=.*\d)[A-Za-z0-9]{7,11}$/g.test(rg)) {
        return true;
    };
    return false;
}