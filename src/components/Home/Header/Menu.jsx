import React, { useState, useEffect } from "react";
import styles from "./modal-styles.module.css";

export default function HeaderMenu({ setShow, show }) {
    const [showtrue, setShowTrue] = useState(false);
    useEffect(() => setShowTrue(show), [show]);

    const [sideStyle, setSideStyle] = useState({});
    const resize = () => {
        if (window?.innerWidth && window?.innerWidth < 576) setSideStyle({ height: "100%", width: "100%", top: "0" });
        else setSideStyle({ maxHeight: "480px", width: "320px", top: "64px" });
    };
    useEffect(resize, []);
    window.onresize = resize;

    const close = (e) => {
        if (e.currentTarget === e.target) hide();
    };

    const hide = () => {
        setShowTrue(false);
        setTimeout(() => setShow(false), 300);
    };

    return (
        <div className={showtrue ? styles.fade : undefined} onClick={close}>
            <div className={styles.modal} style={{ ...sideStyle, right: showtrue ? "0" : "-576px" }}>
                {sideStyle.height === "100%" && (
                    <div className={styles.close} onClick={close}>
                        &#x2715;
                    </div>
                )}
                <div>Ilova haqida</div>
                <div>Biz bilan bog'lanish</div>
            </div>
        </div>
    );
}
