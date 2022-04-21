import { Campaign } from "./campaign.model";

export class SaveGame
{
    private _title: string = 'New save';
    private _campaigns: Campaign[] = [];
 
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

    public set campaigns(campaigns: Campaign[])
    {
        this._campaigns = campaigns;
    }

    public get campaigns(): Campaign[]
    {
        return this._campaigns;
    }

    public addCampaign(campaign: Campaign)
    {
        this._campaigns.push(campaign);
    }

    public removeCampaign(campaign: Campaign)
    {
        this._campaigns = this._campaigns.filter(item => item !== campaign);
    }
}
