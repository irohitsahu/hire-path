
//from material ui code sample
import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import MDBox from '../../components/MDBox';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.85),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
}));

const SearchResult = ({ text, showResult }) => {

    return (


        <MDBox color="white">
            {text}
        </MDBox>


    );

}


const SearchBar = () => {


    const [inputText, setInputText] = useState("");
    const [isPressed, setIsPressed] = useState(false);

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        console.log(inputText);


    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsPressed(true)
            // console.log('do validate',inputText)

        }
    }



    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Your Dream Job "
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={inputHandler}
                    onKeyDown={handleKeyDown}
                />
            </Search>
            { }
            <SearchResult text={inputText} showResult={isPressed} />
        </>
    )

}

export default SearchBar;