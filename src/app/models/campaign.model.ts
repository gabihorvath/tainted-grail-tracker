import { AvalonSave } from "./avalon-save.model";

export class Campaign
{
    private _title: string = "";
    private _description: string = "";
    private _avalonSave: AvalonSave = {};

    public constructor(init?:Partial<Campaign>) {
        Object.assign(this, init);
    }

    public set title(title: string)
    {
        this._title = title;
    }

    public get title(): string
    {
        return this._title;
    }

    public set description(description: string)
    {
        this._description = description;
    }

    public get description(): string
    {
        return this._description;
    }

    public set avalonSave(avalonSave: AvalonSave)
    {
        this._avalonSave = avalonSave;
    }

    public get avalonSave(): AvalonSave
    {
        return this._avalonSave;
    }
}
