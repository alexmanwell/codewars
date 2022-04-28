function travel(r, zipcode) {
    if (zipcode === "") {
        return ":/";
    }

    let addresses  = r.split(",");
    let streets = [];
    let numbers = [];
    addresses.forEach((address) => {
        if (address.endsWith(zipcode)) {
            numbers.push(address.substring(0, address.indexOf(" ")));
            let street = address.split(" ").slice(1, address.length).join(" ").replace(zipcode, "").trim();
            streets.push(street);
        }
    });

    return zipcode + ":" + streets.join(",") + "/" + numbers.join(",");
}