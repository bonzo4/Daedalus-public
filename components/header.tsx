import Button from './shared/Button';

const Header = () => {
    return (
        <header>
            <nav>
                <Button 
                    type="link"
                    text="Collections"
                    href="/collections"
                />

                <Button 
                    type="link"
                    text="Calendar"
                    href="/calendar"
                />

                <Button 
                    type="link"
                    text="FAQ"
                    href="/faq"    
                />
                
                <div>
                    <Button
                        type="button"
                        text="Select Wallet"
                        href=""
                    />
                </div>
            </nav>
        </header>
    )
}

export default Header;