const roleCheck = (role) => (req, res, next) =>
{console.log(req.userVerified)
  !role.includes(req.userVerified.userRole)
    ? res.status(401).json('Forbidden')
    : next();}

module.exports = roleCheck;