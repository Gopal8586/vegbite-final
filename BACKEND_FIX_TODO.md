# Backend Login/Signup Fix TODO

1. [ ] Install bcryptjs
2. [ ] Update model: remove cnfpassword, add hashedPassword
3. [ ] Fix signup POST: validate, check dup, hash, save, redirect /login?success=1
4. [ ] Fix login POST: find user, bcrypt.compare, set session, redirect /vegbite
5. [ ] Add error redirects (?error=msg)
6. [ ] Test & complete
