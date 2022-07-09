import logo from './logo.svg';
import c from '@tinyfe/classnames/es';
import s from './app.module.scss';

function App() {
    return (
        <div className={c(s.App)}>
            <header className={c(s['App-header'])}>
                <img src={logo} className={s['App-logo']} alt='logo' />
                <p>Hello Vite + React!</p>
            </header>
        </div>
    );
}

export default App;
