import { NavlinkButton } from './NavlinkButton';

export function Sidebar() {
  return (
    <aside className="sticky hidden h-screen w-64 border-r border-neutral-600 bg-neutral-900 text-neutral-200 md:flex md:flex-col">
      <div className="flex items-center border-b border-neutral-600 px-5 py-3.5 text-2xl font-black">
        DubPolls
      </div>
      <nav className="h-full flex flex-col justify-between gap-1 px-2 py-2">
        <div className='w-full space-y-1'>
          <NavlinkButton to={'/'} text={'Home'} />
          <NavlinkButton to={'/following'} text={'Following'} />
        </div>

        <div className='w-full pb-3 space-y-1'>
          <NavlinkButton to={'/account'} text={'Account'} />
          <NavlinkButton to={'/settings'} text={'settings'} />
        </div>
      </nav>
    </aside>
  );
}
