
// import SignUpPage from './SignUpPage.vue';
const SignUpPage = require('./SignUpPage.vue');
const vtl = require('@testing-library/vue');
const { render, screen } = vtl;

it('has Sign Up header', async () => {

    render(SignUpPage);
    const header = screen.queryByRole('heading', { name: 'Sign Up' });

    expect(header).not.toBeNull();
});
