function getUser(req, res, next) {
    const user = req.user;
    if (user)
        return next();
    res.status(401).json({ error: 'Session Expired / Invalid. Log in again!' });
}
export default getUser;
//# sourceMappingURL=getUser.js.map