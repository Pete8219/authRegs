import dbConnect from '../../../utils/dbConnect'

import Category from '../../../models/Category'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req

    switch(method) {
        case 'GET':
            try {
                const category = await Category.findById(id)

                if(!category) {
                    return res.status(400).json({ success: false})
                }

                res.status(200).json({ success: true, data: category })
            } catch (error) {
                res.status(400).json({ success: false })
                
            }
            break
        case 'PUT' :
            try {
                const category = await Category.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!category) {
                    return res.status(400).json({ success: false})
                }

                res.status(200).json({ success: true, data: category})
            } catch (error) {

                res.status(400).json({ success: false })
                
            }  
            break  

        case 'DELETE' :
            try {
                const category = await Category.findByIdAndDelete({_id: id})

                if(!category) {
                    return res.status(400).json({ success: false})
                }

                res.status(200).json({ success: true, data: {}})

            } catch (error) {
                res.status(400).json({ success: false})
            } 
            break;
            default:
                res.status(400).json({ success: false})
            break    


            
    }

}