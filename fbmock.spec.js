function MyAuth(authService){
    this.authService = authService

    this.signInWithFacebook = (phone, password) => {
        let fbUserObject = this.authService(phone,password)
        return fbUserObject
    }
}
test('Mock function 1 should be return 1', () => {
    const returnInt = jest.fn(1).mockReturnValue(1)
    expect(returnInt(1)).toBe(1)
    expect(returnInt).toBeCalledWith(1)
   
})

test('Call signinWithFacebook with valid credential should pass', () => {
    const facebookAuth =jest.fn('0914058911', 'abc12345').mockReturnValue({ name :'charintip', facebookId : '123456789', email : 'Charintip_j@hotmail.com' })
    let app = new MyAuth(facebookAuth)
    let phone = '0868416449'
    let password = 'abc12345'
    let value = app.signInWithFacebook(phone, password)

    expect(value).toEqual({ name :'charintip', facebookId : '123456789', email : 'Charintip_j@hotmail.com'})
    expect(facebookAuth).toBeCalled()
    expect(facebookAuth).toBeCalledWith('0914058911', 'abc12345')
})
