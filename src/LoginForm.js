// const useFormField = (initialValue: string = '') => {
//     const [value, setValue] = React.useState(initialValue);
//     const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
//     return { value, onChange };
// };
//
// export function LoginForm() {
//     const emailField = useFormField();
//     const passwordField = useFormField();
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         api.login(emailField.value, passwordField.value);
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor='email'>Email</label>
//                 <input type='email' id='email' {...emailField} />
//             </div>
//             <div>
//                 <label htmlFor='password'>Password</label>
//                 <input type='password' id='password' {...passwordField} />
//             </div>
//         </form>
//     );
// }


// function LoginForm() {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         api.login(email, password);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor='email'>Email</label>
//                 <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <div>
//                 <label htmlFor='password'>Password</label>
//                 <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//         </form>
//     );
// }
//
// export default LoginForm;

