
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
  description: string;
  details: string;
}

interface EventType {
  title: string;
}

interface IndustryDialogProps {
  industry: Industry;
  eventTypes: EventType[];
  isOpen: boolean;
  onClose: () => void;
}

const IndustryDialog = ({ industry, eventTypes, isOpen, onClose }: IndustryDialogProps) => (
  <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle className="text-xl">{industry.title}</DialogTitle>
        <DialogDescription className="text-base pt-2">{industry.description}</DialogDescription>
      </DialogHeader>
      <div className="placeholder-box h-48 rounded-md mb-4">
        [Platzhalter für Branchenbild]
      </div>
      <p className="text-sm text-muted-foreground mb-4">{industry.details}</p>
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-medium">Typische Eventformate:</h4>
        <div className="grid grid-cols-2 gap-2">
          {eventTypes.slice(0, 4).map((event, i) => (
            <div key={i} className="text-xs p-2 bg-secondary/50 rounded-md">{event.title}</div>
          ))}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default IndustryDialog;
