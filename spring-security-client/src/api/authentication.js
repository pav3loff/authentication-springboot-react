export async function login(user) {
    var token = {
        jwt: "",
    };

    await fetch("/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Bad credentials!");
            }
        })
        .then((data) => {
            token = data;
        })
        .catch(() => {});

    return token;
}

export async function validateToken(token) {
    var valid = false;

    await fetch("/validate_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwt: token }),
    })
        .then((response) => {
            if (response.ok) {
                valid = true;
            } else {
                throw new Error("Bad credentials!");
            }
        })
        .catch(() => {});

    return valid;
}
