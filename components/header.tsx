import Button from './shared/Button';

const Header = () => {
    return (
        <header>
            <nav>
                <Button 
                    type="link"
                    text="Collections"
                    href="/collection"
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