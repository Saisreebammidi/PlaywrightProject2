export class AutomationExerciseObjects {
    protected static LOGINBUTTON = `a[href='/login']`
    protected static EMAILADDRESS = `//input[@data-qa='login-email']`
    protected static PASSWORD = `//input[@data-qa='login-password']`
    protected static LOGIN = `//button[@data-qa='login-button']`

    //Contact Us
    protected static ContactButton =`a[href='/contact_us']`
    protected static Name =`input[placeholder='Name']`
    protected static Email =`input[placeholder='Email']`
    protected static SubjectMessage =`input[placeholder='Subject']`
    protected static Message =`#message`
    protected static ChooseFile =`input[name="upload_file"]`
    protected static SubmitButton =`input[value='Submit']`
    protected static ContactPage =`#contact-page`
    protected static HomePageIcon =`a[class='btn btn-success'] span`

    //search products
    protected static Products =`a[href='/products']`
    protected static SearchProduct =`#search_product`
    protected static SearchButton =`#submit_search`
    protected static SearchedProducts =`//h2[@class='title text-center']`


    //add Product
    protected static AddItem =`div:nth-child(9) > .product-image-wrapper > .choose > .nav > li > a`
    protected static ViewProduct =`div:nth-child(9) > .product-image-wrapper > .choose > .nav > li > a`
    protected static AddToCart =`button[type='button']`



}