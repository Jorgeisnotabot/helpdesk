const { app } = await import("./app.js");

const port = app.get("port");

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default server;
