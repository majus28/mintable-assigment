import classNames from 'classnames';
import type { IRaffle } from 'reducers/raffles/index';
import { useDrag } from 'react-dnd';

export interface Props extends IRaffle {
  className?: string;
}

function TicketCard({ obtained, id, name, image, className }: Props) {
  const [collected, drag, dragPreview]: any = useDrag(() => ({
    type: 'RAFFLE',
    item: { id },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview}>
      <div className="flex opacity-50">
        <img src={image} alt={name} className="inline" />
      </div>
    </div>
  ) : (
    <div ref={drag}>
      <div className={classNames('flex relative  cursor-pointer', className)}>
        <div className="absolute -right-2 -top-3 flex items-center justify-center bg-blue w-8 text-sm h-8 rounded-full shadow text-white font-bold">
          {obtained}
        </div>
        <img src={image} alt={name} className="inline" />
      </div>
    </div>
  );
}

export default TicketCard;
