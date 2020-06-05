export async function register(user) {
    var success = false;

    await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            if (response.ok) {
                success = true;
            } else {
                throw new Error("Username taken!");
            }
        })
        .catch(() => {});

    return success;
}
