
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Industry {
  title: string;
}

interface EventType {
  title: string;
  description: string;
  details: string;
}

interface EventDialogProps {
  event: EventType;
  industries: Industry[];
  isOpen: boolean;
  onClose: () => void;
}

const EventDialog = ({ event, industries, isOpen, onClose }: EventDialogProps) => (
  <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle className="text-xl">{event.title}</DialogTitle>
        <DialogDescription className="text-base pt-2">{event.description}</DialogDescription>
      </DialogHeader>
      <div className="placeholder-box h-48 rounded-md mb-4">
        [Platzhalter für Eventtyp-Bild]
      </div>
      <p className="text-sm text-muted-foreground mb-4">{event.details}</p>
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Passt perfekt für Branchen wie:</h4>
        <div className="grid grid-cols-2 gap-2">
          {industries.slice(0, 4).map((industry, i) => (
            <div key={i} className="text-xs p-2 bg-secondary/50 rounded-md">{industry.title}</div>
          ))}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default EventDialog;
