import Link from 'next/link'

export default (props) => {
    const { name, url } = {...props}
    return (
        <>
            <Link href={url} prefetch >{name}</Link>
            <style jxs>{`
                a { margin: 4px; padding: 12px; background-color: white; border-radius: 8px; color: black; text-decoration: none; line-height: 3; }
                a:hover { color: chocolate }
            `}</style>
        </>
    )
}
