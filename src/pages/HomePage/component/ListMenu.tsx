import React, { useState } from 'react'
import css from './listMenu.module.scss'

interface IListMenuProps {
    children: string
    dropdown?: JSX.Element
}

function ListMenu({ children, dropdown }: IListMenuProps) {
    return (
        <div className={css.listMenu}>
            <div className={css.title}>{children}</div>
            <div className={css.dropdown}>{dropdown}</div>
        </div>
    )
}

export default ListMenu
