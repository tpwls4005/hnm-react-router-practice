import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ];
    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className='nav-section'>
                <img
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>

                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
                    {/* 검색 바에 placeholder 추가 */}
                    <button className="search-button">검색</button>
                    {/* 검색 버튼 추가 */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;