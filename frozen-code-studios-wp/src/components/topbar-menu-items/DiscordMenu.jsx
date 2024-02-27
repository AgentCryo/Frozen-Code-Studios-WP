import { ControlledMenu, MenuItem, useHover } from '@szhsin/react-menu';
import { useRef, useState } from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link, useNavigate } from 'react-router-dom';

export const DiscordMenu = () => {
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const { anchorProps, hoverProps } = useHover(isOpen, setOpen);

    const navigate = useNavigate();

    return (
        <div style={{ padding: '0px 10px 0px 10px' }}>
            <Link
                ref={ref}
                {...anchorProps}
                style={{ color: 'white', textDecoration: 'none' }}
            >
                Discord
            </Link>
            <ControlledMenu
                {...hoverProps}
                state={isOpen ? 'open' : 'closed'}
                anchorRef={ref}
                onClose={() => setOpen(false)}
            >
                <MenuItem href= "https://discord.com/invite/nspawJ8ZH2" target = "_blank">Join</MenuItem>
                <MenuItem onClick={() => navigate('/comunity_guidlines')}>Comunity Guidlines</MenuItem>
            </ControlledMenu>
        </div>
    );
};

export default DiscordMenu;
