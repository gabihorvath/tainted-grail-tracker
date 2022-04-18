import { AvalonSave } from "./avalon-save.model";

export class Campaign
{
    private _title: string = "";
    private _description: string = "";
    private _avalonSave: AvalonSave = {};

    public setTitle(title: string): void
    {
        this._title = title;
    }

    public getTitle(): string
    {
        return this._title;
    }

    public setDescription(description: string): void
    {
        this._description = description;
    }

    public getDescription(): string
    {
        return this._description;
    }

    public setAvalonSave(avalonSave: AvalonSave): void
    {
        this._avalonSave = avalonSave;
    }

    public getAvalonSave(): AvalonSave
    {
        return this._avalonSave;
    }
}
