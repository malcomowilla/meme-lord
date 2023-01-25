import React from "react";

function Header() {
    return (
        <div className="flex content-center justify-between items-center h-32 bg-gradient-to-r from-amber-300 to-orange-600">
            <h3 className="subpixel-antialiased font-mono text-4xl font-bold text-orange-800 p-4 m-4 align-middle">Meme lord</h3>
            <div>
                <nav className="text-cyan-700">
                    <ul className="m-0 p-0 list-none overflow-hidden text-2xl">
                        <li className="inline m-4 p-4 h-4 rounded-lg"><a href="#?" className="m-2 p-4">Memes</a></li>
                        <li className="inline m-4 p-4 h-4 rounded-lg"><a href="#?" className="m-2 p-4">Generate Meme</a></li>
                        <li className="inline m-4 p-4 h-4 rounded-lg"><a href="#?" className="m-2 p-4">About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;