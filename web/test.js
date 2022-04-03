import Github from "./github.js";
function run_tests(github) {
    TEST("", () => {
        github.getUser("ewsgit").then((user) => {
            console.log(user.getLocation());
        });
    });
}
function TEST(expectation, methodToRun) {
    if (typeof expectation === "string") {
        if (typeof methodToRun() === "string") {
            console.log("[UNCHECKABLE] String passed.");
        }
        else {
            console.error("[ERROR] String Does Not Match.");
            debugger;
            return;
        }
    }
    if (typeof expectation === "object") {
        if (typeof methodToRun() === "object") {
            let pass = true;
            for (let i = 0; i < Object.keys(methodToRun).length; i++) {
                if (typeof Object.keys(methodToRun)[i] === Object.keys(expectation)[i]) {
                }
                else {
                    pass = false;
                }
            }
            if (pass !== true) {
                console.error("[ERROR] Object does not match");
                debugger;
                return;
            }
            else {
                console.log("[SUCCESS] Object matches expectation");
            }
        }
    }
}
run_tests(new Github("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"));
